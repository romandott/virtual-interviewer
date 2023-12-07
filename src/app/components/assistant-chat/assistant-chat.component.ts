import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualInterviewChatService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'virtual-interviewer-assistant-chat',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './assistant-chat.component.html',
    styleUrl: './assistant-chat.component.scss',
})
export class AssistantChatComponent implements OnInit {
    public readonly chat$ = this.virtualInterviewChatService.getChat()
    public readonly state$ = this.virtualInterviewChatService.getState()
    public hideButton = false
    public hideInput = true
    public readonly chatFormGroup = new FormGroup<{ message: FormControl<string | null> }>({
        message: new FormControl<string | null>('', Validators.required)
    });

    public constructor(
        private readonly route: ActivatedRoute,
        private readonly virtualInterviewChatService: VirtualInterviewChatService
    ) {
    }

    public ngOnInit(): void {
        this.startAssistantChat()
    }

    public async startVirtualInterview(): Promise<void> {
        const id = this.route.snapshot.paramMap.get('id')

        if (!id) {
            return
        }

        await this.virtualInterviewChatService.startVirtualInterview(id);
        this.startConversation();
    }

    public handleChatFormSubmit(): void {
        const { message } = this.chatFormGroup.value;

        if (this.chatFormGroup.valid && typeof message === 'string') {
            this.virtualInterviewChatService.sendMessage(message);
            this.chatFormGroup.reset();
        }
    }

    private startAssistantChat(): void {
        this.virtualInterviewChatService.getAssistantHelp();
    }

    private startConversation(): void {
        this.hideStartButton()
        this.showInput()
    }

    private showInput(): void {
        this.hideInput = false
    }

    private hideStartButton(): void {
        this.hideButton = true
    }
}
