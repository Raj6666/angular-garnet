// tslint:disable: no-string-literal
/*
 * @Descripttion: 侧边栏组件
 * @version: 1.0
 * @Author: Husiyuan
 * @Date: 2020-04-24 11:17:31
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-22 17:03:11
 */
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { BreadcrumbService } from 'src/app/index/components/breadcrumb/breadcrumb.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

  currentLabels: Array<string> = [];
  theme: string = environment.theme;

  constructor(
    private elementRef: ElementRef,
    private breadcrumbService: BreadcrumbService
  ) {
    // 启动对路由服务的监听
    this.breadcrumbService.urlSubscription = this.breadcrumbService.urlSubject.subscribe(action => {
      // 检查所有路由
      this.currentLabels = action.map((item: any) => (item.label));
      if (this.currentLabels.includes('权限管理') ||
        this.currentLabels.includes('资源管理') ||
        this.currentLabels.includes('资源类型配置') ||
        this.currentLabels.includes('单点登录应用组')) {
        this.currentMenu = 2;
      } else {
        this.currentMenu = 1;
      }
    });
  }

  @Input() isCollapsed: boolean;
  currentMenu = 1;

  ngOnInit() {
    this.elementRef.nativeElement.replaceWith(document.getElementById('siderContainer'));
  }

  ngOnDestory() {
    // 组件销毁同时取消监听
    this.breadcrumbService.urlSubject.unsubscribe();
  }
}
