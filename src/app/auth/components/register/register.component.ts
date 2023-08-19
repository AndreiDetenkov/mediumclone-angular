import { Component } from '@angular/core'
import { combineLatest } from 'rxjs'
import { RouterModule } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'

import { authActions } from 'src/app/auth/store/actions'
import { authFeature } from 'src/app/auth/store/reducers'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { BackendErrorsMessagesComponent } from 'src/app/shared/components/backendErrorMessages/backend-errors-messages/backend-errors-messages.component'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    BackendErrorsMessagesComponent,
  ],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  data$ = combineLatest({
    isSubmitting: this.store.select(authFeature.selectIsSubmitting),
    backendErrors: this.store.select(authFeature.selectValidationErrors),
  })

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(authActions.register({ request }))
  }
}
