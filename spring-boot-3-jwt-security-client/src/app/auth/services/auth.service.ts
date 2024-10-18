import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from '../model/authenticationRequest';
import { AuthenticationResponse } from '../model/authenticationResponse';
import { RegisterRequest } from '../model/registerRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  protected basePath = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  isAuth() {
    return (localStorage.getItem('token') == '' || !localStorage.getItem('token') || !localStorage) ? false : true;
  }

  getAuthToken() {
    let token = localStorage.getItem('token');
    return (localStorage.getItem('token') != '') ? token : null;
  }

  getLogin(authRequest?: AuthenticationRequest) : Observable<AuthenticationResponse> {

    console.log('Au niveau du service : ' + authRequest?.email);
    console.log('Au niveau du service : ' + authRequest?.password);

    return this.http.post<AuthenticationResponse>(`${this.basePath}/api/v1/auth/authenticate`, authRequest);
  }

  register(registerRequest?: RegisterRequest) : Observable<AuthenticationResponse> {

    return this.http.post<AuthenticationResponse>(`${this.basePath}/api/v1/auth/register`, registerRequest);
  }

}
