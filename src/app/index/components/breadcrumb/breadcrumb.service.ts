/*
 * @Descripttion: 面包屑路径处理服务
 * @version: 1.0
 * @Author: Husiyuan
 * @Date: 2020-04-27 16:00:16
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-11 18:48:43
 */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, PRIMARY_OUTLET } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  // 定义消息源 ——  Subject 对象，string 为消息数据类型
  urlSubject = new Subject<Array<object>>();
  // 定义监听的数据流 —— observable 的可被观察的数据流
  urlSubscription = new Subscription();
  // 发送指令函数
  sendAction(action: Array<object>) {
    this.urlSubject.next(action);
  }

  constructor() { }

  // 获取路由信息
  getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): any {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    // get the child routes
    const children: ActivatedRoute[] = route.children;

    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (const child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      // verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // get the route's URL segment
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      // append route URL to URL
      url += `/${routeURL}`;

      // add breadcrumb
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        // params: child.snapshot.params,
        params: child.snapshot.queryParams,
        url
      };

      // remove repeat breadcrumb
      const hasBreadcrumb = breadcrumbs.find(item => (item.label === breadcrumb.label));

      // add breadcrumb finally
      if (!hasBreadcrumb) {
        breadcrumbs.push(breadcrumb);
      }

      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
