import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualInterviewChatService } from './virtual-interview-chat.service';

@Component({
  selector: 'virtual-interviewer-assistant-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assistant-chat.component.html',
  styleUrl: './assistant-chat.component.scss',
})
export class AssistantChatComponent implements OnInit {
  public readonly chat$ = this.virtualInterviewChatService.getChat()

  public constructor(private readonly virtualInterviewChatService: VirtualInterviewChatService) {}

  public startInterview(): void {}

  public ngOnInit(): void {
    this.startAssistantChat()
  }

  private startAssistantChat(): void {
    this.virtualInterviewChatService.getAssistantHelp();
  }
}
