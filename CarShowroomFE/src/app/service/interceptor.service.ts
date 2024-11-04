import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  currentRequest!: HttpRequest<any>;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isI18nRequest = req.url.includes('i18n'); 

    if (!isI18nRequest) {
      this.currentRequest = req.clone({ url: `${environment.origin}${req.url}` });
    } else {
      this.currentRequest = req; 
    }

    return next.handle(this.currentRequest).pipe(
      catchError((error) => throwError(() => error.error))
    );
  }
}
