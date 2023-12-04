import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { GetFeedResponseInterface } from '../types/get-feed-response.interface'

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    getFeed: props<{ url: string }>(),
    getFeedSuccess: props<{ feed: GetFeedResponseInterface }>(),
    getFeedFailure: emptyProps(),
  },
})
