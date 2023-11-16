import { Actions, createEffect, ofType } from '@ngrx/effects'
import { inject } from '@angular/core'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { AuthService } from 'src/app/auth/services/auth.service'
import { authActions } from 'src/app/auth/store/actions'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistenceService } from '../../shared/services/persistence.service'
import { Router } from '@angular/router'

export const registerEffect = createEffect(
  (
    $actions = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService),
  ) => {
    return $actions.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            persistenceService.set('accessToken', currentUser.token)
            return authActions.registerSuccess({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              }),
            )
          }),
        )
      }),
    )
  },
  { functional: true },
)

export const redirectAfterRegisterEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        router.navigateByUrl('/')
      }),
    )
  },
  {
    functional: true,
    dispatch: false,
  },
)

export const loginEffect = createEffect(
  (
    $actions = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService),
  ) => {
    return $actions.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            persistenceService.set('accessToken', currentUser.token)
            return authActions.loginSuccess({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.loginFailure({
                errors: errorResponse.error.errors,
              }),
            )
          }),
        )
      }),
    )
  },
  { functional: true },
)

export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => {
        router.navigateByUrl('/')
      }),
    )
  },
  {
    functional: true,
    dispatch: false,
  },
)