import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'mc-backend-errors-messages',
  templateUrl: './backend-errors-messages.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class BackendErrorsMessagesComponent implements OnInit {
  @Input()
  backendErrors: BackendErrorsInterface = {}

  errorMessages: string[] = []

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map(
      (fieldName: string) => {
        const messages = this.backendErrors[fieldName].join(' ')
        return `${fieldName} ${messages}`
      },
    )
  }
}
