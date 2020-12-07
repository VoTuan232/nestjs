import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { AddError } from './store/actions/error.action';
import { LoginUser, SetInitialUser } from './store/actions/auth.action';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private store: Store<AppState>, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.store.dispatch(new SetInitialUser());
    this.store.select(state => state.error).subscribe(val => 
      this.showError(val.error))
  }

  showError(err: any) {
    if (err) {
      console.log('err', err)
      this.messageService.add({
        severity: 'error',
        summary: 'Error Message',
        detail: err.message || 'Internal server error'
      });
    }
  }
}
