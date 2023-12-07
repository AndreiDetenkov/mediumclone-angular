import { combineLatest } from 'rxjs'
import { Store } from '@ngrx/store'
import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

import { feedActions } from './store/actions'
import { feedFeature } from './store/reducers'

import { ErrorMessageComponent } from '../error-message/error-message.component'
import { LoadingComponent } from '../loading/loading.component'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, ErrorMessageComponent, LoadingComponent],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = ''

  constructor(private store: Store) {}

  data$ = combineLatest({
    isLoading: this.store.select(feedFeature.selectIsLoading),
    error: this.store.select(feedFeature.selectError),
    feed: this.store.select(feedFeature.selectData),
  })

  ngOnInit() {
    this.store.dispatch(feedActions.getFeed({ url: this.apiUrl }))
  }
}
