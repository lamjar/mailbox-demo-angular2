import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { InboxViewComponent }    from './components/inboxView.component';
import { SentViewComponent }  from './components/sentView.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'inbox', component: InboxViewComponent },
      { path: 'sent', component: SentViewComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MessageRoutingModule { }
