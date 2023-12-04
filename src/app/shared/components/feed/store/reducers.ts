import { FeedStateInterface } from '../types/feed-state.interface'
import { createFeature, createReducer, on } from '@ngrx/store'
import { routerNavigationAction } from '@ngrx/router-store'

import { feedActions } from './actions'

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const reducer = createReducer(
  initialState,
  on(feedActions.getFeed, (state) => ({ ...state, isLoading: true })),
  on(feedActions.getFeedSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.feed,
  })),
  on(feedActions.getFeedFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigationAction, () => initialState)
)

export const feedFeature = createFeature({
  name: 'feed',
  reducer,
})
