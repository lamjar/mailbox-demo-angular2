import { Component } from '@angular/core';

@Component({
  templateUrl: '../views/listMessages.view.html',
  selector: 'list-messages'
})
export class ListMessagesComponent {
  message = {
    from: 'me@me.com',
    to: 'to@you.com',
    subject: 'test',
    time: new Date()
  };


}
