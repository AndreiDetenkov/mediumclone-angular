import { createActionGroup, props } from '@ngrx/store'

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    register: props<{ request: RegisterRequestInterface }>(),
    'register success': props<{ currentUser: CurrentUserInterface }>(),
    'register failure': props<{ errors: BackendErrorsInterface }>(),

    login: props<{ request: LoginRequestInterface }>(),
    'login success': props<{ currentUser: CurrentUserInterface }>(),
    'login failure': props<{ errors: BackendErrorsInterface }>(),
  },
})
