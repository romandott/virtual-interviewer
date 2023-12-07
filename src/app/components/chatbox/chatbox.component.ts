import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'virtual-interviewer-chatbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.scss',
})
export class ChatboxComponent {}
