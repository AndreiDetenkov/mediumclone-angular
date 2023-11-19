import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { TopBarComponent } from 'src/app/shared/components/topBar/top-bar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
})
export class AppComponent {}
