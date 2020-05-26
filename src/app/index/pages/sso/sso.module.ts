/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-04-26 12:05:39
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-07 10:57:08
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SsoComponent} from './sso.component';
import {Routes, RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {ToolComponent} from './components/tool/tool.component';
import {ModalComponent} from './components/modal/modal.component';
import {UpdateComponent} from './pages/update/update.component';
import {MyTableService} from 'src/services/my-table.service';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SsoComponent
  },
  {
    path: 'update',
    component: UpdateComponent, // 单点登录应用组的新增、修改
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
    SharedModule
  ],
  declarations: [SsoComponent, ToolComponent, ModalComponent, UpdateComponent],
  providers: [MyTableService]
})
export class SsoModule {
}
