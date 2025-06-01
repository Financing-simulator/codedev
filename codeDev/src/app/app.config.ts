// src/app/app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

// Crie um token de configuração, se quiser usar tipado
export const APP_CONFIG = {
  apiUrl: 'http://localhost:8080/api/v1'
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(), // garante que HttpClient esteja disponível
    { provide: 'APP_CONFIG', useValue: APP_CONFIG } // aqui está a injeção da URL base
  ]
};
