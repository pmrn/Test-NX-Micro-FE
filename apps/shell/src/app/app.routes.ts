import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'reports',
    loadChildren: () => import('reports/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'main-dashboard',
    loadChildren: () =>
      import('mainDashboard/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
