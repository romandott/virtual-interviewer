import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'virtual-interviewer-chat-message',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrl: './chat-message.component.scss',
})
export class ChatMessageComponent {}
