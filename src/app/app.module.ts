import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { PrincipalModule } from './pages/principal/principal.module';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {registerLocaleData} from '@angular/common';
import localept from '@angular/common/locales/pt';
import { GaleriaComponent } from './pages/galeria/galeria.component';

registerLocaleData(localept, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    HttpClientModule,
    SweetAlert2Module,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" },
    AuthInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
