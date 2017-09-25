import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from "../../../environments/environment";

@Injectable()
export class AuthService {

  private baseUrl = `${environment.base}:${environment.port}`

  constructor(private http: HttpClient) { }

  signIn(creditionals: any): any {

    return this.http.post(`${this.baseUrl}/sign-in`, creditionals)
      .map((response: any) => {
        return this.handleResponse(response);
      })
  }

  signUp(creditionals: any): any {

    return this.http.post(`${this.baseUrl}/sign-up`, creditionals)
      .map((response: any) => {
        return this.handleResponse(response);
      })
  }

  handleResponse(data: any) {
    if (data && data.token) {
      localStorage.setItem('currentUser', JSON.stringify(data));
    }

    return data;
  }

}

