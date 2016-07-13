import { Component } from '@angular/core';

// import '../styles/messages.scss';

import { Message } from '../models/message.model';

import { ListMessagesComponent } from './listMessages.component';
import { ShowMessageComponent } from './showMessage.component';

@Component({
  templateUrl: '../views/messageList.view.html',
  directives: [ListMessagesComponent, ShowMessageComponent]
})
export class InboxViewComponent {

  activeMessage : Message;

  activeMessageChange(message : Message) {
    console.log('activeMessage changed...', message);
    this.activeMessage = message;
  }

  fetch(limit: number) {
    console.log('I should fetch me:', limit);
  }



}
