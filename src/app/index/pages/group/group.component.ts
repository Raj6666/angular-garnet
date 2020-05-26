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
import {GroupService} from './group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  isModalVisible = false; // 是否展示弹窗
  rowData = {}; // 弹窗页面数据

  // 模态框
  showModal(data) {
    this.isModalVisible = true;
    this.rowData = data;
  }

  // 修改按钮传递该行数据
  updateData(data) {
    this.myRowDataService.rowData = data;
  }

  constructor(
    public myTableServie: MyTableService,
    public myRowDataService: GroupService
  ) {
  }

  ngOnInit(): void {
    if (!this.myTableServie.listOfAllData.length) {
      for (let i = 0; i < 15; i++) {
        this.myTableServie.listOfAllData.push({
          id: i,
          name: `Garnet ${i}`,
          groupType: '租户+应用',
          relatedApp: 'app1',
          relatedTenant: 'tenant',
          relatedUser: ['user', 'user123', 'user23', 'user3'],
          relatedRole: ['role1', 'role2', 'role3'],
          createTime: '2019-12-21 14:26:19',
          updateTime: '2020-02-11 10:21:06',
          modifier: 'modifier',
        });
      }
    }
  }
}
