import { createFeature, createReducer, on } from '@ngrx/store'

import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import { authActions } from 'src/app/auth/store/actions'

const initialState: AuthStateInterface = {
  isLoading: false,
  isSubmitting: false,
  currentUser: undefined,
  validationErrors: null,
}

const reducer = createReducer(
  initialState,
  on(authActions.register, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(authActions.registerSuccess, (state, action) => ({
    ...state,
    isSubmitting: false,
    currentUser: action.currentUser,
  })),
  on(authActions.registerFailure, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(authActions.login, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(authActions.loginSuccess, (state, action) => ({
    ...state,
    isSubmitting: false,
    currentUser: action.currentUser,
  })),
  on(authActions.loginFailure, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
)

export const authFeature = createFeature({
  name: 'auth',
  reducer,
})
