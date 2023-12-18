import { TestBed } from '@angular/core/testing';

import { BotChatService } from './bot-chat.service';

describe('BotChatService', () => {
  let service: BotChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
