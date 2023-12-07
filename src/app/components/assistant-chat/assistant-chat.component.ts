import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChatMessageComponent } from './chat-message.component';
import { ChatMessageTextComponent } from './chat-message-text.component';
import { VirtualInterviewChatService } from './virtual-interview-chat.service';

@Component({
  selector: 'virtual-interviewer-assistant-chat',
  standalone: true,
  imports: [CommonModule, ChatMessageComponent, ChatMessageTextComponent, HttpClientModule],
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
