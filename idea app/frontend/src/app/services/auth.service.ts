import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthDTO, AuthType } from '@app/models/auth';
import { environment } from '@env/environment';
import { User } from '@app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = environment.api_server + '/auth';

  constructor(private http: HttpClient) { }

  auth(authType: AuthType, data: AuthDTO): Observable<User> {
    return this.http.post<User>(`${this.api}/${authType}`, data).pipe(
      mergeMap((user: User) => {
        this.token = user.token ?? '';
        return of(user);
      })
    );
  }

  whoami(): Observable<User> {
    return this.http.get<User>(`${this.api}/whoami`, {
      headers: { authorization: `Bearer ${this.token}` }
    });
  }

  get token(): string | null {
    return localStorage.getItem('idea_token') || '';
  }

  set token(val: string | null) {
    if (val) {
      localStorage.setItem('idea_token', val);
    } else {
      localStorage.clear();
    }
  }
}
