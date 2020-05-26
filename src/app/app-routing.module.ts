/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-04-24 16:10:32
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 14:13:24
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ErrorHandlerComponent } from './errorHandler/errorHandler.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/index/home', pathMatch: 'full' }, // 根路径默认跳转至首页
  { path: 'login', component: LoginComponent, pathMatch: 'full' }, // 根路径默认跳转至首页
  { path: 'index',  loadChildren: './index/index.module#IndexModule'},
  { path: 'error', component: ErrorHandlerComponent }, // error页面
  { path: '**', component: ErrorHandlerComponent } // 404找不到页面跳转error页面
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules // 预加载所有懒加载模块
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
