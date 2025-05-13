// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter }        from '@angular/router';
import { provideHttpClient }    from '@angular/common/http';
import { importProvidersFrom }  from '@angular/core';
import { CommonModule }         from '@angular/common';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),             // registra suas rotas
    provideHttpClient(),               // habilita HttpClient globalmente
    importProvidersFrom(CommonModule)  // disponibiliza diretivas básicas
  ]
})
.catch(err => console.error(err));