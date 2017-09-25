import { Injectable } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./guard/auth.guard";

@Injectable()
export class ApiService {

  constructor(public auth: AuthService, public guard: AuthGuard) { }

}
