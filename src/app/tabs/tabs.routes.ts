import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'events',
        loadComponent: () =>
          import('../events-tab/events.page').then((m) => m.EventsPage),
      },
      {
        path: 'photos',
        loadComponent: () =>
          import('../photos-tab/photos.page').then((m) => m.PhotosPage),
      },
      {
        path: 'bingo',
        loadComponent: () =>
          import('../bingo-tab/bingo.page').then((m) => m.BingoPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile-tab/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/tabs/events',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/events',
    pathMatch: 'full',
  },
];
