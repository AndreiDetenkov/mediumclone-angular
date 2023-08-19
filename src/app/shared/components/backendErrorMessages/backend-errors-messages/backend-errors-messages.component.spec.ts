import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendErrorsMessagesComponent } from './backend-errors-messages.component';

describe('BackendErrorsMessagesComponent', () => {
  let component: BackendErrorsMessagesComponent;
  let fixture: ComponentFixture<BackendErrorsMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendErrorsMessagesComponent]
    });
    fixture = TestBed.createComponent(BackendErrorsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
