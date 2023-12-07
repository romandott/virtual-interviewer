import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, connectable, defer, firstValueFrom, map, Observable, tap } from 'rxjs';
import { WebSocketService } from './web-socket.service';

export interface VirtualInterviewMessage {
    readonly sender: 'assistant' | 'user' | 'virtual-interviewer'
    readonly text: string;
}

export interface VirtualInterviewChat {
    readonly id: string;
    readonly messages: VirtualInterviewMessage[];
}

interface InterviewMessage {
    readonly interviewId: string;
    readonly message: {
        readonly orderNumber: number
        readonly text: string
        readonly participantType: 'Recruiter' | 'Candidate'
    };
}

interface SocketMessage {
    readonly interviewId: string;
    readonly message: string;
}

@Injectable({
    providedIn: 'root'
})
export class VirtualInterviewChatService {
    private interviewId!: string;

    private readonly state$ = new BehaviorSubject<'idle' | 'typing'>('idle')
    private readonly chat$ = new BehaviorSubject<VirtualInterviewChat>({
        id: '',
        messages: []
    })

    private readonly virtualInterviewerAnswer = connectable(this.getVirtualInterviewerMessages(), {connector: () => new BehaviorSubject<VirtualInterviewMessage | null>(null)})

    constructor(private readonly httpClient: HttpClient, private readonly socket: WebSocketService) {
    }

    public getChat(): Observable<VirtualInterviewChat> {
        return this.chat$.asObservable()
    }

    public getState(): Observable<'idle' | 'typing'> {
        return this.state$.asObservable()
    }

    public async startVirtualInterview(vacancyId: string): Promise<void> {
        await this.socket.start()

        this.state$.next('typing')

        const params = new HttpParams()
            .set('vacancyId', vacancyId)
        const start$ = this.httpClient.post<InterviewMessage>('https://virtual-job-interview-api.dev.rabota.ua/interview', {}, {params})

        this.virtualInterviewerAnswer.connect()

        const {interviewId} = await firstValueFrom(start$)
        this.interviewId = interviewId
        this.state$.next('idle')
    }

    public getAssistantHelp(): void {
        this.sendWelcomeMessage();
    }

    private sendWelcomeMessage(): void {
        this.chat$.next({
            id: '',
            messages: [{
                sender: 'assistant',
                text: 'Welcome to the virtual interview!'
            }]
        })
    }

    private getVirtualInterviewerMessages(): Observable<VirtualInterviewMessage | null> {
        const messages$ = defer(() => this.socket.on<SocketMessage>('message'))
        return messages$.pipe(
            map(([message]) => {
                return {sender: 'virtual-interviewer', text: message.message} as VirtualInterviewMessage
            }),
            tap(message => {
                this.appendMessage(message);
            })
        )
    }

    private appendMessage(message: VirtualInterviewMessage | null): void {
        if (!message) {
            return
        }

        this.chat$.next({
            id: this.interviewId,
            messages: [...this.chat$.value.messages, message]
        })

        this.state$.next('idle')
    }

    public async sendMessage(message: string): Promise<void> {
        if (!this.interviewId) {
            return
        }

        this.state$.next('typing')
        this.appendMessage({sender: 'user', text: message})
        const params = new HttpParams()
            .set('message', message)

        await firstValueFrom(this.httpClient.post(`https://virtual-job-interview-api.dev.rabota.ua/interview/${this.interviewId}/message`, {}, { params}))
    }
}
