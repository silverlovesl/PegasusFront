import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isAuthenticated:boolean = false;

  constructor() { }

  authenticateNow(loginUser){

    this.isAuthenticated = false;
  }
}
 