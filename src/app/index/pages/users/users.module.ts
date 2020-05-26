/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-04-26 12:05:39
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-07 10:57:08
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToolComponent } from './components/tool/tool.component';
import { ModalComponent } from './components/modal/modal.component';
import { UpdateComponent } from './pages/update/update.component';
import { MyTableService } from 'src/services/my-table.service';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'update',
    component: UpdateComponent, // 用户管理的新增修改
    data: {
      breadcrumb: '新增/修改'
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [UsersComponent, ToolComponent, ModalComponent, UpdateComponent],
  providers: [MyTableService]
})
export class UsersModule { }
