/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-05-06 17:07:38
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-18 11:52:15
 */
import {Component, OnInit} from '@angular/core';
import {MyTableService} from 'src/services/my-table.service';
import {NzFormatEmitEvent} from 'ng-zorro-antd';
import {ResourcesService} from './resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  isModalVisible = false; // 是否展示弹窗
  rowData = {}; // 弹窗页面数据
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          expanded: true,
          children: [
            {title: 'leaf', key: '10010', isLeaf: true},
            {title: 'leaf', key: '10011', isLeaf: true},
            {title: 'leaf', key: '10012', isLeaf: true}
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          expanded: true,
          children: [
            {
              title: 'parent 1-1-1',
              key: '10021',
              children: [
                {
                  title: 'leaf 1',
                  key: '10010',
                  children: [
                    {title: 'leaf 1-0',
                      key: '100100',
                      children: [
                        {title: 'leaf test word',
                          key: '100001',
                          children: [
                            {title: 'leaf test word', key: '1000011', isLeaf: true},
                            {title: 'hello world', key: '1000012', isLeaf: true}
                          ]
                        },
                        {title: 'hello world', key: '100002', isLeaf: true}
                      ]

                    },
                    {title: 'leaf 1-1', key: '100101', isLeaf: true}
                  ]
                },
                {title: 'leaf', key: '10011', isLeaf: true},
                {title: 'leaf', key: '10012', isLeaf: true}
              ]
            },
          ]
        },
        {
          title: 'parent 1-2',
          key: '1003',
          children: [{title: 'leaf', key: '10030', isLeaf: true}, {title: 'leaf', key: '10031', isLeaf: true}]
        }
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    // console.log(event);
  }

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
    public myRowDataService: ResourcesService
  ) {
  }

  ngOnInit(): void {
    if (!this.myTableServie.listOfAllData.length) {
      for (let i = 0; i < 15; i++) {
        this.myTableServie.listOfAllData.push({
          id: i,
          name: `模块分类-系统管理${i}`,
          resourceDescription: '模块分类部分的系统管理模块的可访问性',
          pathIdentification: '/garnet/modules/systemManage',
          resourceType: '租户',
          relatedTenant: 'Garnet_tenant',
          relatedApp: 'Garnet_app',
          typeSetting: 'Garnet系统模块',
          createTime: '2020-05-02 18:29:29',
          updateTime: '2020-05-02 18:29:29',
          modifier: 'Garnet',
        });
      }
    }
  }
}
