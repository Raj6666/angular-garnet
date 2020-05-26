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

export interface Data {
  id: number;
  operation: string;
  operationContent: string;
  IP: string;
  writeTime: string;
}

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  rowData = {}; // 弹窗页面数据


  constructor(
    public myTableServie: MyTableService
  ) {
  }

  ngOnInit(): void {
    if (!this.myTableServie.listOfAllData.length) {
      for (let i = 0; i < 15; i++) {
        this.myTableServie.listOfAllData.push({
          id: i,
          name: `User ${i}`,
          operation: '角色绑定权限',
          operationContent: '角色管理模块',
          IP: '10.42.34.3',
          writeTime: '2020-04-28  15:09:23',
        });
      }
    }
  }
}
