import { Component, Input } from '@angular/core';

import { Message } from '../models/message.model';

@Component({
  templateUrl: '../views/showMessage.view.html',
  selector: 'show-message'
})
export class ShowMessageComponent {

  @Input()
  message : Message;


}
