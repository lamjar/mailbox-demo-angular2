import { Component, OnInit } from '@angular/core';

import '../styles/messages.scss';

import { Message } from '../models/message.model';

import { ListMessagesComponent } from './listMessages.component';
import { ShowMessageComponent } from './showMessage.component';

import { MessageService } from '../../../mocks/messages.mock.service';

@Component({
  templateUrl: '../views/messageList.view.html',
  providers: [MessageService]
})
export class InboxViewComponent implements OnInit {

  constructor(private messageService: MessageService) { };

  activeMessage : Message;

  messages : Message[];

  activeMessageChange(message : Message) {
    console.log('activeMessage changed...', message);
    this.activeMessage = message;
  }

  fetch(limit: number) {
    console.log('I should fetch me:', limit);
    this.getMessages(limit);
  }

  getMessages(limit = 100) {
    this.messageService.getInboxMessages(limit)
      .then(messages => this.messages = messages)
  }

  ngOnInit() {
    this.getMessages();
  }

}

