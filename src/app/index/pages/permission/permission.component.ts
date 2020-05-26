/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-05-07 11:00:47
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-07 11:02:58
 */
import {Component, OnInit} from '@angular/core';
import {MyTableService} from 'src/services/my-table.service';
import {PermissionService} from './permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {
  isModalVisible = false; // 是否展示弹窗
  rowData = {}; // 弹窗页面数据

  // 模态框
  showModal(data) {
    this.isModalVisible = true;
    this.rowData = data;
  }

  // 修改按钮传递数据
  updateData(data) {
    this.myRowDataService.rowData = data;
  }

  constructor(
    public myTableServie: MyTableService,
    public myRowDataService: PermissionService
  ) {
  }

  ngOnInit(): void {
    if (!this.myTableServie.listOfAllData.length) {
      for (let i = 0; i < 15; i++) {
        this.myTableServie.listOfAllData.push({
          id: i,
          name: `Garnet ${i}`,
          permissionType: '租户+应用',
          relatedTenant: 'garnet_tenant',
          relatedApp: 'garnet_application',
          wildcard: '/index',
          action: 'write',
          createTime: '2019-12-21 14:26:19',
          updateTime: '2020-02-11 10:21:06',
          modifier: 'modifier',
          note: 'permission note',
        });
      }
    }
  }
}
