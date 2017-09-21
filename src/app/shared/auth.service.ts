import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: Http) { }

  login(): any {
    return this.http.get('login')
  }

}
