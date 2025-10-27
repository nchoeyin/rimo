import { ApplicationConfig, provideZoneChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import routeConfig from './routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ThemeService } from './shared/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routeConfig),
    provideClientHydration(withEventReplay()),
    // Initialize theme early using Angular's APP_INITIALIZER. ThemeService is safe for SSR and
    // only applies the persisted theme on the browser.
    {
      provide: APP_INITIALIZER,
      useFactory: (ts: ThemeService) => () => ts.init(),
      deps: [ThemeService],
      multi: true,
    },
  ],
};
