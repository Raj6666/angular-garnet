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
import {UsersService} from './users.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  isModalVisible = false; // 是否展示弹窗
  rowData = {}; // 弹窗页面数据

  // 模态框
  showModal(data) {
    this.isModalVisible = true;
    this.rowData = data;
  }

  // 修改按钮传值
  updateData(data) {
    this.myRowDataService.rowData = data;
  }

  constructor(
    public myTableServie: MyTableService,
    public myRowDataService: UsersService
  ) {
  }

  ngOnInit(): void {
    if (!this.myTableServie.listOfAllData.length) {
      for (let i = 0; i < 15; i++) {
        this.myTableServie.listOfAllData.push({
          id: i,
          name: `Garnet ${i}`,
          relatedTenant: ['Garnet', 'tenant1', 'tenant3', 'tenant4', 'tenant5', 'tenant6', 'tenant7', 'tenant8', 'tenant9', 'tenant10', 'tenant11', 'tenant12', 'tenant13', 'tenant14', 'tenant15', 'tenant16', 'tenant17', 'tenant18', 'tenant19'],
          relatedGroup: ['Group1', 'app3', 'group4', 'group5', 'Garnet'],
          phone: '153 2354 8752',
          email: '1634tr54@richstonedt.com',
          password: '123321',
          confirmPassword: '123321',
          createTime: '2019-12-21 14:26:19',
          updateTime: '2020-02-11 10:21:06',
          modifier: 'Garnet',
        });
      }
    }
  }
}
