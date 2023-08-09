import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { provideStore } from '@ngrx/store'
import { isDevMode } from '@angular/core'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { AppComponent } from 'src/app/app.component'
import { appRoutes } from 'src/app/app.routes'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
})
