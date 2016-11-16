import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Most apps have a concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 */
@Injectable()
export class User {

  constructor(public http: Http) {
  }

  login(accountInfo: any) : Promise<any> {
    return this.http.post('https://example.com/api/v1/login', accountInfo).toPromise();
  }
}
