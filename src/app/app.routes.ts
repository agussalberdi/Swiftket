import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'event-list',
        loadComponent: () => import('./components/event-list/event-list.component').then(m => m.EventListComponent)
    },
    {
        path: 'event-detail/:id',
        loadComponent: () => import('./components/event-list/event-detail/event-detail.component').then(m => m.EventDetailComponent)
    },
    // {
    //     path: 'profile',
    //     loadComponent: () => import('./components/user-profile/user-profile.component').then(m => m.UserProfileComponent)
    // },
    // {
    //     path: 'profile/:id',
    //     loadComponent: () => import('./components/user-profile/user-profile.component').then(m => m.UserProfileComponent)
    // },
];
