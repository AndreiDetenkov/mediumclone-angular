import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { combineLatest } from 'rxjs'

import { authFeature } from 'src/app/auth/store/reducers'

@Component({
  selector: 'mc-topbar',
  templateUrl: './top-bar.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class TopBarComponent {
  data$ = combineLatest({
    currentUser: this.store.select(authFeature.selectCurrentUser),
  })
  constructor(private store: Store) {}
}
