import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'

import { register } from 'src/app/auth/store/actions'
import { authFeature } from 'src/app/auth/store/reducers'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
})
export class RegisterComponent {
  isSubmitting$ = this.store.select(authFeature.selectIsSubmitting)
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(register({ request }))
  }
}
