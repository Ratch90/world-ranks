import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
    { path: 'country', loadComponent: () => import('./pages/country/country.component').then((m) => m.CountryComponent) }
];
