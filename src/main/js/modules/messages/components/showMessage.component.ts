import { Component } from '@angular/core';

@Component({
  templateUrl: '../views/showMessage.view.html',
  selector: 'show-message'
})
export class ShowMessageComponent {
  message = {
    body : 'Lorem ipsum opsum dobsum'
  };


}
