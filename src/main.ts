import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { provideState, provideStore } from '@ngrx/store'
import { isDevMode } from '@angular/core'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { AppComponent } from 'src/app/app.component'
import { appRoutes } from 'src/app/app.routes'
import { authFeature } from 'src/app/auth/store/reducers'
import { provideHttpClient } from '@angular/common/http'

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    provideStore(),
    provideState(authFeature),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
})
