/*
 * @Descripttion: 表格共用封装函数服务
 * @version: 1.0
 * @Author: Husiyuan
 * @Date: 2020-05-06 17:04:06
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-06 17:49:08
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyTableService {

  constructor() {
  }

  isAllDisplayDataChecked = false; // 当页是否全选
  isIndeterminate = false; // 是否展示半选状态
  listOfDisplayData = []; // 当页数据
  listOfAllData = []; // 所有页面数据
  mapOfCheckedId: { [key: string]: boolean } = {}; // 每行数据是否选中的{id: Boolean} mapper
  numberOfChecked = 0; // 共选中个数

  currentPageDataChange($event: []): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  // 表格
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  // 表格全选事件
  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

}
