/*
 * @Descripttion: 租户管理弹窗组件
 * @version: 0.1.0
 * @Author: Husiyuan
 * @Date: 2020-05-22 14:49:12
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-22 14:59:46
 */
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() isVisible;
  @Input() rowData;
  @Output() closeEvent = new EventEmitter();

  // 默认值
  data = {
    name: '',
    relatedAllUsers: '',
    userList: [],
    applicationList: [],
    createdTime: null,
    modifiedTime: null,
    updatedByUserName: '',
    description: ''
  };

  constructor(private common: CommonService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.rowData) {
      const newData = changes.rowData.currentValue;
      if (!this.common.isNull(newData)) {
        this.data = newData;
      }
    }
  }

  // 弹框的关闭事件
  handleCancel(): void {
    this.closeEvent.emit();
  }
}
