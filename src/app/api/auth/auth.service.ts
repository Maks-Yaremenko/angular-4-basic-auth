import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

import 'rxjs/add/operator/toPromise';
import { HttpClient } from "@angular/common/http";
import { Headers } from "@angular/http";

@Injectable()
export class AuthService {

  private baseUrl = `${environment.base}:${environment.port}`

  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  login(creditionals: any): any {

    console.log(' in auth service ', `${this.baseUrl}/login`);
    return this.http.post(`${this.baseUrl}/login`, creditionals)
  }

}

