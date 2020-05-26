/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-05-06 17:07:38
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-07 18:45:06
 */
import {Component, OnInit} from '@angular/core';
import {MyTableService} from 'src/services/my-table.service';
import {RoleService} from './role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  isModalVisible = false; // 是否展示弹窗
  rowData = {}; // 弹窗页面数据

  // 模态框
  showModal(data) {
    this.rowData = data;
    this.isModalVisible = true;
  }

  // 修改按钮传递数据
  updateData(data) {
    this.myRowDataService.rowData = data;
  }

  constructor(
    public myTableServie: MyTableService,
    public myRowDataService: RoleService
  ) {
  }

  ngOnInit(): void {
    if (!this.myTableServie.listOfAllData.length) {
      for (let i = 0; i < 15; i++) {
        this.myTableServie.listOfAllData.push({
          id: i,
          name: [`平台管理员${i}`],
          type: '租户+应用',
          relatedTenant: 'tenant_tenant',
          relatedApp: 'Application_app',
          relatedGroup: ['group', 'group2', 'group3'],
          permissionList: ['系统管理', '应用管理', '角色管理', '组管理', '日志管理', '资源管理', '应用配置', '应用新增', '应用删除', '权限配置'],
          createTime: '2019-10-19 19:45:09',
          updateTime: '2020-02-03 14:34:04',
          modifier: 'Garnet',
          note: 'note, note note'
        });
      }
    }
  }
}
