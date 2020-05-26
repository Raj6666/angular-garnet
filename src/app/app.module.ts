/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-05-19 14:26:13
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-19 14:26:13
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { ErrorHandlerComponent } from './errorHandler/errorHandler.component';
import { LoginComponent } from './login/login.component';
// modules
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { IndexModule } from './index/index.module';
// services
import { SimpleHttpInterceptor } from '../services/interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonService } from '../services/common.service';
import { HttpService } from '../services/http.service';
import { HttpPService } from '../services/http-p.service';
import { AuthService } from '../services/auth.service';
// mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../mock';
import { environment } from '../environments/environment';
const MOCKMODULE = !environment.production ? [ DelonMockModule.forRoot({ data: MOCKDATA, log: true }) ] : [];
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorHandlerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    IndexModule,
    ...MOCKMODULE
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: SimpleHttpInterceptor, multi: true},
    CommonService,
    HttpService,
    HttpPService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
