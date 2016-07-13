import { provideRouter, RouterConfig } from '@angular/router';

import { InboxViewComponent }  from './inboxView.component';
import { SentViewComponent }  from './sentView.component';

const routes: RouterConfig = [
  { path: 'inbox', component: InboxViewComponent },
  { path: 'sent', component: SentViewComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
