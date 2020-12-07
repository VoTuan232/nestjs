import { ActionReducerMap } from '@ngrx/store';
import { errorReducer, ErrorState } from '@app/store/reducers/error.reducer';
import { authReducer, AuthState } from '@app/store/reducers/auth.reducer';
import { AuthEffects } from '@app/store/effects/auth.effects';

export const effects = [AuthEffects];

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer,
};

export interface AppState {
  error: ErrorState;
  auth: AuthState;
}
