import { Routes } from '@angular/router';

export const routes: Routes = [
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home',loadComponent: () => import('./pages/home/home')},
   {path: 'about',loadComponent: () => import('./pages/about-me/about-me')},
   {path: 'project',loadComponent: () => import('./pages/project/project')},
   {path: 'contact',loadComponent: () => import('./pages/contact-me/contact-me')},
   {path: 'service',loadComponent: () => import('./pages/service/service')}
  
];
