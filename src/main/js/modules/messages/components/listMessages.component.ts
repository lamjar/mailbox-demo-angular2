import {Component, Output, EventEmitter} from '@angular/core';
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

  @Output() activeMessageChange = new EventEmitter();


  activeMesage = this.messages[0];

  setActive(message: Message) {
    console.log('active message is', message);
    this.activeMesage = message;
    //fire event
    this.activeMessageChange.emit(this.activeMesage);
  };

  // TODO: set first message to activeMessage and emit event accordingly...


}
