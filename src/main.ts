import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'

import { AppComponent } from 'src/app/app.component'
import { appRoutes } from 'src/app/app.routes'

bootstrapApplication(AppComponent, { providers: [provideRouter(appRoutes)] })
