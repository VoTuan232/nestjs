import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store';
import { LoginUser, RegisterUser } from '@app/store/actions/auth.action';
import { AuthType } from '@app/models/auth';
import { validateWhitespace } from '@app/utilities/validators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup | any;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      username: this.fb.control('', [Validators.required, validateWhitespace]),
      password: this.fb.control('', [Validators.required, validateWhitespace])
    });
  }

  auth(authType: AuthType = 'login') {
    const action = {
      login: LoginUser,
      register: RegisterUser
    };
    const val = this.authForm.getRawValue();
    this.store.dispatch(new action[authType](val));
  }
}
