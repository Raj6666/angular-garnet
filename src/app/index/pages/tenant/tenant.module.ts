/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-04-26 12:05:39
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-07 19:02:48
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TenantComponent} from './tenant.component';
import {Routes, RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToolComponent} from './components/tool/tool.component';
import {ModalComponent} from './components/modal/modal.component';
import {UpdateComponent} from './pages/update/update.component';
import {MyTableService} from 'src/services/my-table.service';
import {SharedModule} from '../../../shared/shared.module';
import {TenantService} from './tenant.service';


const routes: Routes = [
  {
    path: '',
    component: TenantComponent
  },
  {
    path: 'update',
    component: UpdateComponent, // 租户管理的新增、修改
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
  declarations: [TenantComponent, ToolComponent, ModalComponent, UpdateComponent],
  providers: [MyTableService, TenantService]
})
export class TenantModule {
}
