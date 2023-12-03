import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http'
import { inject } from '@angular/core'
import { PersistenceService } from './persistence.service'

export const authInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const persistenceService = inject(PersistenceService)
  const token = persistenceService.get('accessToken')
  const modifiedReq = request.clone({
    headers: request.headers.set('Authorization', token ? `Token ${token}` : ''),
  })
  return next(modifiedReq)
}
