import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      url: `${environment.baseUrl}/${req.url}`
    });

    return next.handle(req);
  }
}
