import {Component, OnInit} from '@angular/core';
import {MyTableService} from 'src/services/my-table.service';
import {ResourceTypeService} from './resource-type.service';

@Component({
  selector: 'app-resource-type',
  templateUrl: './resource-type.component.html',
  styleUrls: ['./resource-type.component.scss']
})
export class ResourceTypeComponent implements OnInit {
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
    public myRowDataService: ResourceTypeService
  ) {
  }

  ngOnInit() {
    if (!this.myTableServie.listOfAllData.length) {
      for (let i = 0; i < 15; i++) {
        this.myTableServie.listOfAllData.push({
          id: i,
          name: `Garnet ${i}`,
          codeName: 'garnet_button',
          resourceType: '租户+应用',
          typeDescription: 'Garnet系统按钮',
          relatedTenant: 'Garnet_123',
          relatedApp: 'Garnet_3',
          actionGroup: 'write',
          fieldList: [
            {
              fieldType: '字符型',
              fieldContent: 'url',
            },
            {
              fieldType: '字符型',
              fieldContent: 'gender',
            },
            {
              fieldType: '数字型',
              fieldContent: 'age',
            }
          ],
          createTime: '2020-05-02 18:29:29',
          updateTime: '2020-05-02 18:29:29',
          modifier: 'Garnet',
        });
      }
    }
  }
}
