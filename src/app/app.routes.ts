import { Routes } from '@angular/router';

export const routes: Routes = [
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home',loadComponent: () => import('./pages/home/home')},
   { path: 'about-me', redirectTo: '' },
   { path: 'project', redirectTo: '' },
   { path: 'contact', redirectTo: '' },
   { path: 'service', redirectTo: '' },
   { path: '**', redirectTo: '' } // Catch-all per evitare errori 404
  
];
