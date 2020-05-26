/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-04-24 17:53:48
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 12:04:21
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {Routes, RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule {
}
