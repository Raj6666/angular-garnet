/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-04-26 10:46:19
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-12 12:16:58
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbService } from './components/breadcrumb/breadcrumb.service';
import { AuthGuard } from 'src/services/auth-guard.service';
import { IndexService } from './index.service';

const routes: Routes = [
  // { path: '', redirectTo: '/index/home', pathMatch: 'full' }, // 根路径默认跳转至首页
  {
    path: '',
    component: IndexComponent, // index
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), // 欢迎页模块
        data: {
          breadcrumb: '欢迎页'
        },
      },
      {
        path: 'tenant',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./pages/tenant/tenant.module').then(m => m.TenantModule), // 租户管理模块
        data: {
          breadcrumb: '租户管理'
        },
      },
      {
        path: 'application',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./pages/application/application.module').then(m => m.ApplicationModule), // 应用管理模块
        data: {
          breadcrumb: '应用管理'
        },
      },
      {
        path: 'users',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), // 用户管理模块
        data: {
          breadcrumb: '用户管理'
        },
      },
      {
        path: 'group',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./pages/group/group.module').then(m => m.GroupModule), // 组管理模块
        data: {
          breadcrumb: '组管理'
        },
      },
      {
        path: 'log',
        loadChildren: () => import('./pages/log/log.module').then(m => m.LogModule), // 系统日志模块
        data: {
          breadcrumb: '系统日志'
        },
      },
      {
        path: 'permission',
        loadChildren: () => import('./pages/permission/permission.module').then(m => m.PermissionModule), // 权限管理模块
        data: {
          breadcrumb: '权限管理'
        },
      },
      {
        path: 'resource-type',
        loadChildren: () => import('./pages/resource-type/resource-type.module').then(m => m.ResourceTypeModule), // 资源类型配置模块
        data: {
          breadcrumb: '资源类型配置'
        },
      },
      {
        path: 'role',
        loadChildren: () => import('./pages/role/role.module').then(m => m.RoleModule), // 角色管理模块
        data: {
          breadcrumb: '角色管理'
        },
      },
      {
        path: 'resources',
        loadChildren: () => import('./pages/resources/resources.module').then(m => m.ResourcesModule), // 资源管理模块
        data: {
          breadcrumb: '资源管理'
        },
      },
      {
        path: 'sso',
        loadChildren: () => import('./pages/sso/sso.module').then(m => m.SsoModule), // 单点登录应用组模块
        data: {
          breadcrumb: '单点登录应用组'
        },
      },
      {
        path: 'about',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule), // 关于页模块
        data: {
          breadcrumb: '关于Garnet'
        },
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexComponent,
    HeaderComponent,
    SiderComponent,
    BreadcrumbComponent,
  ],
  providers: [BreadcrumbService, AuthGuard, IndexService]
})
export class IndexModule {
}
