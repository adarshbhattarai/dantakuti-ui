import { NbTokenService , NbAuthJWTToken} from '@nebular/auth';
import {Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

    constructor(private tokenService: NbTokenService){ }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       this.tokenService.get().subscribe((token: NbAuthJWTToken) => {
          if (token.isValid()) {
               let user : any = token.getPayload();
               localStorage.setItem('currentUser', JSON.stringify(user));
               let tokenValue = token.getValue();
               req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + tokenValue) });
          }
       });
        req = req.clone({ headers: req.headers.append('Accept', 'application/json').append('Content-Type', 'application/json') });
        return next.handle(req);   
    }

}
export let tokenInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: AddTokenInterceptor,
    multi: true
};