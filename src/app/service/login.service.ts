import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Authorization } from '../shared/auth.model';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  loginAuth(loginID: string, password: string): Observable<Authorization> {

    var userCredentials = {
      loginID: loginID,
      password: password
    }

    console.log(userCredentials);

    let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json'}) });

    return this.http
      .post(environment.APP_DOMAIN + "/api/login",userCredentials,options)
      .map(res => res.json());
  }

}
