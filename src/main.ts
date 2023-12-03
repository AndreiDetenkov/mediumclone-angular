import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { provideState, provideStore } from '@ngrx/store'
import { isDevMode } from '@angular/core'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { provideEffects } from '@ngrx/effects'
import { provideRouterStore, routerReducer } from '@ngrx/router-store'

import { AppComponent } from 'src/app/app.component'
import { appRoutes } from 'src/app/app.routes'
import { authFeature } from 'src/app/auth/store/reducers'
import * as authEffects from 'src/app/auth/store/effects'
import { authInterceptor } from './app/shared/services/authInterceptor'

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes),
    provideStore({ router: routerReducer }),
    provideRouterStore(),
    provideState(authFeature),
    provideEffects(authEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
})
