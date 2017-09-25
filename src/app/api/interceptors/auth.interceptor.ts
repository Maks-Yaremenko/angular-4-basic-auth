import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let user: any = localStorage.getItem('currentUser');

    if (user) {
      user = JSON.parse(user);

      req = req.clone({
        headers: req.headers.set('Authorization', user.token)
    });

  }

    return next.handle(req);
  }
}
