import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'virtual-interviewer-chat-message-text',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
})
export class ChatMessageTextComponent {}
