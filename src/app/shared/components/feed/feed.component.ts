import { combineLatest } from 'rxjs'
import { Store } from '@ngrx/store'
import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'

import { feedActions } from './store/actions'
import { feedFeature } from './store/reducers'

import { ErrorMessageComponent } from '../error-message/error-message.component'
import { LoadingComponent } from '../loading/loading.component'
import { environment } from '../../../../environments/environment'
import { FeedParamsInterface } from './types/feed-params.interface'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, ErrorMessageComponent, LoadingComponent],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = ''

  limit = environment.limit
  baseUrl = this.router.url.split('?')[0]
  currentPage: number = 0

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  data$ = combineLatest({
    isLoading: this.store.select(feedFeature.selectIsLoading),
    error: this.store.select(feedFeature.selectError),
    feed: this.store.select(feedFeature.selectData),
  })

  ngOnInit() {
    this.store.dispatch(feedActions.getFeed({ url: this.apiUrl }))

    this.route.queryParams.subscribe(
      (params: FeedParamsInterface) => (this.currentPage = Number(params['page'] || '1'))
    )
  }
}
