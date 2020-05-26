/*
 * @Descripttion: 主页模块组件
 * @version: v1.0
 * @Author: Husiyuan
 * @Date: 2020-04-23 19:51:46
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-22 16:46:09
 */
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbService } from 'src/app/index/components/breadcrumb/breadcrumb.service';
import { HttpPService } from 'src/services/http-p.service';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  styleUrls: ['../../assets/styles/theme.scss', './index.component.scss'],
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  routerChange: Subscription;
  isCollapsed = false;
  user = 'admin';
  isSinglePage: boolean =
    this.activatedRoute.snapshot.queryParams.singlePage === 'true'; // url中是否传入仅显示单页而不显示框架外层的属性

  constructor(
    private http: HttpPService,
    private common: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private indexService: IndexService
  ) {
    this.routerChange = this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        const root: ActivatedRoute = this.activatedRoute.root;
        const breadcrumb = this.breadcrumbService.getBreadcrumbs(root);
        // 加载时，给予0毫秒等待，让头部与侧边栏先成功启动对路由的监听，再刷新breadcrumb数据
        setTimeout(() => {
          this.breadcrumbService.sendAction(breadcrumb);
        }, 0);
      });
  }

  ngOnInit(): void {
    // this.http.get('/czps2b4sdapbdbe/pbd/area/areaList', { name: 'raj', test: true }).subscribe((res: any) => {
    //   // console.log(res);
    // });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      // 设置页面y轴滚动的值
      document.getElementById('inner-content').scrollTo(0, 0);
    });
    // 自动加载全局的租户，应用列表
    // this.indexService.getTenants(true);
  }

  ngOnDestory() {
    this.routerChange.unsubscribe();
  }

  switchCollapse(isCollapsed) {
    this.isCollapsed = !isCollapsed;
  }
}
