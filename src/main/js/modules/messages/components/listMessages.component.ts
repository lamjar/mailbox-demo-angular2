import {Component} from '@angular/core';
import { Message } from '../models/message.model';

@Component({
  templateUrl: '../views/listMessages.view.html',
  selector: 'list-messages'
})
export class ListMessagesComponent {
  messages : Message[] = [
    {
      id : 1,
      from: 'me@me.com',
      to: 'to@you.com',
      subject: 'test',
      time: new Date(),
      body: 'lorem uisdv'
    },

    {
      id: 2,
      from: 'me2@me.com',
      to: 'to2@you.com',
      subject: 'test',
      time: new Date(),
      body: 'jksdjvdksjvds'
    }

  ];

  active = this.messages[0];

  setActive(message: Message) {
    console.log('active message is', message);
    this.active = message;
  };


}
