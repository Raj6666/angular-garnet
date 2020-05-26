import {Component, OnInit} from '@angular/core';
import {MyTableService} from 'src/services/my-table.service';
import {ApplicationService} from './application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  isModalVisible = false; // 是否展示弹窗
  rowData = {}; // 弹窗页面数据

  // 模态框
  showModal(data) {
    this.rowData = data;
    this.isModalVisible = true;
  }

  updataData(data) {
    this.myRowDataService.rowData = data;
  }

  constructor(
    public myTableServie: MyTableService,
    public myRowDataService: ApplicationService
  ) {
  }

  ngOnInit() {
    if (!this.myTableServie.listOfAllData.length) {
      for (let i = 0; i < 15; i++) {
        this.myTableServie.listOfAllData.push({
          id: i,
          name: `Garnet ${i}`,
          appIdentifier: 'Garnet',
          appIndexUrl: '/index',
          relatedUser: ['Garnet_123', 'Garnet_3'],
          company: 'richstone',
          refreshApi: `refreshAPI${i}`,
          host: '43322565',
          createTime: '2019-12-21 14:26:19',
          updateTime: '2020-02-11 10:21:06',
          modifier: 'modifier',
        });
      }
    }
  }
}
