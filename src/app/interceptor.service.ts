import {Injectable} from '@angular/core';
import {HttpRequest, HttpInterceptor, HttpHandler,HttpEvent, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class InterceptorService implements HttpInterceptor{
    intercept( req : HttpRequest<any>, next : HttpHandler): Observable <HttpEvent<any>> {
        if(localStorage.getItem('token')){
         req = req.clone({
             setHeaders:{ token :localStorage.getItem('token')}
         });
         return next.handle(req)
        }else{
           return next.handle(req) 
        }
    }
}