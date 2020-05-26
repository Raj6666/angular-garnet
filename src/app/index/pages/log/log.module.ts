
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogComponent} from './log.component';
import {Routes, RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {ToolComponent} from './components/tool/tool.component';
import {MyTableService} from 'src/services/my-table.service';


const routes: Routes = [
  {
    path: '',
    component: LogComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    FormsModule
  ],
  declarations: [LogComponent, ToolComponent],
  providers: [MyTableService]
})
export class LogModule {
}
