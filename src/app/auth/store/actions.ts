import { createActionGroup, props } from '@ngrx/store'

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    register: props<{ request: RegisterRequestInterface }>(),
    'register success': props<{ currentUser: CurrentUserInterface }>(),
    'register failure': props<{ errors: BackendErrorsInterface }>(),
  },
})
