/*
 * @Descripttion: 首页组件
 * @version: 1.0
 * @Author: Husiyuan
 * @Date: 2020-04-24 17:53:48
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 12:04:21
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
