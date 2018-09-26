
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest,  HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/do';


@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        var curbody = req.body;
        if(localStorage.getItem('auth_token')==null) {
            var token:any='false';
        } else {
            var token:any=localStorage.getItem('auth_token');
        }
        let request = req.clone({
            // headers: new HttpHeaders().set('idd','1')
            setHeaders:{idd: token}
            // headers.set('authentication', `hello`);
            });
        return next.handle(request);
    }
}
