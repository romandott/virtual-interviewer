import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface VirtualInterviewMessage {
    readonly author: 'assistant' | 'user' | 'virtual-interviewer'
    readonly text: string;
}

export interface VirtualInterviewChat {
    readonly messages: VirtualInterviewMessage[];
}

@Injectable({
    providedIn: 'root'
})
export class VirtualInterviewChatService {
    private readonly chat$ = new BehaviorSubject<VirtualInterviewChat>({
        messages: []
    })

    constructor(private readonly httpClient: HttpClient) {
    }

    public getChat(): Observable<VirtualInterviewChat> {
        return this.chat$.asObservable()
    }

    public getAssistantHelp(): void {
        this.sendWelcomeMessage();
    }

    private sendWelcomeMessage(): void {
        this.chat$.next({
            messages: [{
                author: 'assistant',
                text: 'Welcome to the virtual interview!'
            }]
        })
    }
}
