import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http'
import { inject } from '@angular/core'

import { PersistenceService } from './persistence.service'

export const authInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const persistenceService: PersistenceService = inject(PersistenceService)
  const token = persistenceService.get('accessToken')
  const modifiedReq = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  })
  return next(modifiedReq)
}
