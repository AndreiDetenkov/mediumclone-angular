import { createFeature, createReducer, on } from '@ngrx/store'

import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import { register } from 'src/app/auth/store/actions'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

const reducer = createReducer(
  initialState,
  on(register, (state) => ({ ...state, isSubmitting: true })),
)

export const authFeature = createFeature({
  name: 'auth',
  reducer,
})
