
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes,
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled',     // Abilita lo scroll agli ID (es. #about)
        scrollPositionRestoration: 'top' // Riporta in alto se cambi rotta
      })
    )
  ]
};
