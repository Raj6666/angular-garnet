/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-05-06 17:07:38
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-22 17:09:54
 */
import {Component, OnInit} from '@angular/core';
import {MyTableService} from 'src/services/my-table.service';
import {TenantService} from './tenant.service';
import { CommonService } from 'src/services/common.service';
import { IndexService } from '../../index.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  isModalVisible = false; // 是否展示弹窗
  rowData; // 弹窗页面数据

  // 模态框
  showModal(data) {
    this.rowData = data;
    this.isModalVisible = true;
  }

  // 修改按钮传值
  updateData(data) {
    this.tenantService.rowData = data;
  }

  constructor(
    private common: CommonService,
    public myTableServie: MyTableService,
    public tenantService: TenantService,
    private indexService: IndexService
  ) {
  }

  ngOnInit(): void {
    this.getTableData('', '');
  }

  search(event) {
    this.getTableData(event.tenant, event.application);
  }

  async getTableData(name, appName) {
    this.myTableServie.listOfAllData = await this.indexService.getTenants(false, name, appName);
  }
}
