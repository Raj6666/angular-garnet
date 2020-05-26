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
import {SsoService} from './sso.service';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.scss']
})
export class SsoComponent implements OnInit {
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
    public myRowDataService: SsoService
  ) { }

  ngOnInit(): void {
    if (!this.myTableServie.listOfAllData.length) {
      for (let i = 0; i < 5; i++) {
        this.myTableServie.listOfAllData.push({
          id: i,
          name: `超级应用组 ${i + 1}`,
          relatedApp: ['app1', 'app2', 'app3', 'app4'],
          modifier: 'modifier',
          note: `应用组 ${i}`,
          createTime: '2019-12-21 14:26:19',
          updateTime: '2020-02-11 10:21:06',
        });
      }
    }
  }
}
