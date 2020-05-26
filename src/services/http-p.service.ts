/*
 * @Descripttion: http请求封装类
 * @version: 0.1.0
 * @Author: Husiyuan
 * @Date: 2020-05-19 15:55:11
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-19 15:55:11
 */
// tslint:disable:no-string-literal
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpPService {

  private isLoading = false;

  constructor(private http: HttpClient) {
  }

  /** 是否正在加载中 */
  get loading(): boolean {
    return this.isLoading;
  }

  begin() {
    setTimeout(() => (this.isLoading = true));
  }

  end() {
    setTimeout(() => (this.isLoading = false));
  }

  /** 参数解析 */
  parseParams(params: any): HttpParams {
    let ret = new HttpParams();
    for (const key in params) {
      if (key !== null) {
        const data = params[key];
        ret = ret.set(key, data);
      }
    }
    return ret;
  }

  request(
    url: string,
    method: string,
    options: {
      body?: any;
      headers?: HttpHeaders | { [header: string]: string | string[] };
      observe?: 'body' | 'events' | 'response';
      params?: HttpParams | { [param: string]: string | string[] };
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    }
  ) {
    this.begin();
    return new Promise((resolve, reject) => {
     this.http.request(method, url,  options ).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      }, () => {
        this.end();
      });
    });
  }

}
