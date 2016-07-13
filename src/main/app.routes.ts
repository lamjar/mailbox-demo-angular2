import { provideRouter, RouterConfig } from '@angular/router';

import { InboxViewComponent }  from './js/modules/messages/components/inboxView.component';
import { SentViewComponent }  from './js/modules/messages/components/sentView.component';

const routes: RouterConfig = [
  { path: 'inbox', component: InboxViewComponent },
  { path: 'sent', component: SentViewComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
