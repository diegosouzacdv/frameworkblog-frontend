
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FieldMessage } from '../models/field.message';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    public message: string = '';

    constructor(
        public authService: AuthService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError(error => {
                    console.log(error)
                    /* let errorObj = error;
                     if (errorObj.error) {
                         errorObj = errorObj.error;
                     }
                     let e: any;
                     if ( !errorObj.status || errorObj.status != undefined) {
                         if (this.isJson(errorObj)) {
                             e = this.convertError(errorObj);
                         }
                         errorObj = e;
                     }*/
                    console.log('erro status');
                    console.log(error.status);
                    switch (error.status) {
                        case 403: this.handle403(error);
                            break;
                        case 401: this.handle401(error);
                            break;
                        case 409: this.handle409(error);
                            break;
                        case 422: this.handle422(error);
                            break;
                        case 500: this.handle500(error);
                            break;
                        case 0: this.handle0(error);
                            break;
                        default:
                            this.handleDefaultError(error);
                    }
                    return throwError(error);
                })) as any;
    }

    public isJson(str: any) {
        try {
            JSON.parse(str);
        } catch (e) {
            console.log(e)
            return false;
        }
        return true;
    }

    public convertError(error: any) {
        return JSON.parse(error);
    }

    public async handle0(error: any) {
        Swal.showValidationMessage(
            `Error: ${error.message}`
        );
    }

    public async handle403(error: any) {
        Swal.showValidationMessage(
            `Error: ${error.error}`
        );
    }

    public async handle401(error: any) {
        Swal.showValidationMessage(
            `Faça o login para continuar`
          )
    }

    public async handle409(error: any) {
        Swal.showValidationMessage(
            `Request failed: ${error.error}`
          )
    }

    public handle422(errorObj: any) {

    }

    public handle500(error: any) {
        console.log(error)
        let msg: string;
        if (error.error.message) {
            msg = error.error.message
        } else {
            msg = error.message
        }
        Swal.showValidationMessage(
            `Error: ${msg}`
        );

    }

    public handleDefaultError(errorObj: any) {
        Swal.showValidationMessage(
            `Error: Serviço Temporiariamente Indisponível.`
        );
    }


}


export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
