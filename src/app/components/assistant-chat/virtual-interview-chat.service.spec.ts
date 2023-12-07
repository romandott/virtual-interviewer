import { TestBed } from '@angular/core/testing';

import { VirtualInterviewChatService } from './virtual-interview-chat.service';

describe('VirtualInterviewChatService', () => {
  let service: VirtualInterviewChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualInterviewChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
