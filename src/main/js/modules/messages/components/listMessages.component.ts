import {Component, Output, EventEmitter, Input} from '@angular/core';
import { Message } from '../models/message.model';

import { FilterByNamePipe } from '../pipes/filterByName.pipe'

@Component({
  templateUrl: '../views/listMessages.view.html',
  selector: 'list-messages',
  pipes: [FilterByNamePipe]
})
export class ListMessagesComponent {

  @Input()
  messages : Message[];

  @Output() activeMessageChange = new EventEmitter();

  // TODO: set first message to activeMessage and emit event accordingly...
  activeMessage : Message;

  searchTerm : string;

  setActive(message: Message) {
    this.activeMessage = message;
    //fire event
    this.activeMessageChange.emit(this.activeMessage);
  };

}
