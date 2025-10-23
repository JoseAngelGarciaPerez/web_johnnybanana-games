import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    //Con scrollPositionRestoration top, al usar una ruta, la vista se mueve a las coordenadas 0 0 de la página
    provideRouter(routes, withInMemoryScrolling(
      {scrollPositionRestoration: 'top',} ),
      //Método para transiciones fluidas y animadas entre rutas
      withViewTransitions()
    ), 
    provideClientHydration(withEventReplay())
  ]
};
