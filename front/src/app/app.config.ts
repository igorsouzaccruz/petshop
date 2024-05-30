import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { LoginService } from './login/login.service';

export const appConfig: ApplicationConfig = {
  providers: [
    LoginService,
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
  ],
};
