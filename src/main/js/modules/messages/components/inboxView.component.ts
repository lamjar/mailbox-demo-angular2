import { Component } from '@angular/core';

// import '../styles/messages.scss';

import { ListMessagesComponent } from './listMessages.component';
import { ShowMessageComponent } from './showMessage.component';

@Component({
  templateUrl: '../views/messageList.view.html',
  directives: [ListMessagesComponent, ShowMessageComponent]
})
export class InboxViewComponent {



}
