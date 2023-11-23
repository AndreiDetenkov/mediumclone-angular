import { createActionGroup, emptyProps, props } from '@ngrx/store'

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    register: props<{ request: RegisterRequestInterface }>(),
    registerSuccess: props<{ currentUser: CurrentUserInterface }>(),
    registerFailure: props<{ errors: BackendErrorsInterface }>(),

    login: props<{ request: LoginRequestInterface }>(),
    loginSuccess: props<{ currentUser: CurrentUserInterface }>(),
    loginFailure: props<{ errors: BackendErrorsInterface }>(),

    getCurrentUser: emptyProps(),
    getCurrentUserSuccess: props<{ currentUser: CurrentUserInterface }>(),
    getCurrentUserFailure: emptyProps(),
  },
})
