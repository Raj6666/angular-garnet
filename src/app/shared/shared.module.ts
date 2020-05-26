import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoxListComponent} from './box-list/box-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoxListComponent],
  exports: [
    BoxListComponent
  ]
})
export class SharedModule { }
