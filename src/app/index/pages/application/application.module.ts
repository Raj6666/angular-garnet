import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationComponent} from './application.component';
import {Routes, RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ToolComponent} from './components/tool/tool.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalComponent} from './components/modal/modal.component';
import {UpdateComponent} from './pages/update/update.component';
import {MyTableService} from 'src/services/my-table.service';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent
  },
  {
    path: 'update',
    component: UpdateComponent, // 应用管理的新增、修改
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
  declarations: [ApplicationComponent, ToolComponent, ModalComponent, UpdateComponent],
  providers: [MyTableService]
})
export class ApplicationModule {
}
