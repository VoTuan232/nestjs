import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { AddError } from './store/actions/error.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(new AddError('message'))
    
  }
}
