/*
 * @Descripttion: 路由守卫文件
 * @version: 1.0
 * @Author: Husiyuan
 * @Date: 2020-05-12 11:43:19
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-12 15:19:55
 */
import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad, Route, CanDeactivate
} from '@angular/router';
import { CommonService } from './common.service';
import { HttpService } from './http.service';

/**
 * 路由守卫，用于加载指定路由前校验用户是否登录，未登录则跳转至登录页，登录则加载指定路由
 */
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private http: HttpService,
    private common: CommonService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // 当前url中的参数对象
    const queryParams = route.queryParams;
    // 缓存中的参数对象
    const queryParamsInCache = localStorage.getItem('queryParams');

    // console.log(queryParams);
    // console.log(queryParamsInCache);

    // if (this.common.isEmptyObj(queryParams)) {
    //   this.router.navigate([state.url], { preserveQueryParams: true, replaceUrl: true });
    //   return false;
    // }
    return true;

    // 判断当前url中有无参数
    // if (this.common.isEmptyObj(queryParams) && this.common.isEmptyObj(queryParamsInCache)) {
    //   console.log(1);
    //   return true;
    // }
    // if (this.common.isEmptyObj(queryParams) && !this.common.isEmptyObj(queryParamsInCache)) {
    //   console.log(2);
    //   console.log(route);
    //   this.router.navigate([state.url], { queryParams: JSON.parse(queryParamsInCache) });
    //   return false;
    // }
    // if (!this.common.isEmptyObj(queryParams) && this.common.isEmptyObj(queryParamsInCache)) {
    //   console.log(3);
    //   localStorage.setItem('queryParams', JSON.stringify(queryParams));
    //   return true;
    // }
    // if (!this.common.isEmptyObj(queryParams) && !this.common.isEmptyObj(queryParamsInCache)) {
    //   console.log(4);
    //   localStorage.setItem('queryParams', JSON.stringify(queryParams));
    //   return true;
    // }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return true;
  }
}
