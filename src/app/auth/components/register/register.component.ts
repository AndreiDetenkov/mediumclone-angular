import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'

import { register } from 'src/app/auth/store/actions'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
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
