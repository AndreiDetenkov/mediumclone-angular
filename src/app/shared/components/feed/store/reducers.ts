import { FeedStateInterface } from '../types/feed-state.interface'
import { createFeature, createReducer, on } from '@ngrx/store'
import { feedActions } from './actions'
import { state } from '@angular/animations'
import { routerNavigationAction } from '@ngrx/router-store'

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

const feedFeature = createFeature({
  name: 'feed',
  reducer,
})
