import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  _staticMessages = require('./messages.json');

  all(limit = 100) {
    return Promise.resolve(this._staticMessages.slice(0, limit));
  }

  getInboxMessages(limit = 100) {
    // TODO: filter for labeled mails
    return this.all(limit);
  }

}
