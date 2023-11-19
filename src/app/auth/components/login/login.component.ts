import { Component } from '@angular/core'
import { combineLatest } from 'rxjs'
import { RouterModule } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'

import { authActions } from 'src/app/auth/store/actions'
import { authFeature } from 'src/app/auth/store/reducers'
import { BackendErrorsMessagesComponent } from 'src/app/shared/components/backendErrorMessages/backend-errors-messages/backend-errors-messages.component'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, BackendErrorsMessagesComponent],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  data$ = combineLatest({
    isSubmitting: this.store.select(authFeature.selectIsSubmitting),
    backendErrors: this.store.select(authFeature.selectValidationErrors),
  })

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {}

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(authActions.login({ request }))
  }
}
