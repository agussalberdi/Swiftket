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
    {
        path: 'add-event',
        loadComponent: () => import('./components/event-list/add-event/add-event.component').then(m => m.AddEventComponent)
    }
];
