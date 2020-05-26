/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-05-15 10:34:36
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-21 16:30:08
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TenantService } from '../../tenant.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  relatedUserOption = ['Garnet_test', 'Garnet12', 'Garnet123', 'Garnet1234', 'user1', 'user2'];
  relatedAppOption = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7'];
  lastSelectedUsers = []; // 记录曾选中关联用户
  validateForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    relatedValue: new FormControl(null, [Validators.required]),
    relatedUserSelectedValue: new FormControl(null, [Validators.required]),
    relatedAppSelectedValue: new FormControl(null, [Validators.required]),
    note: new FormControl(null),
  });

  handleRelated(related) {
    this.validateForm.get('relatedUserSelectedValue').setValue(related === 'Y' ? this.relatedUserOption : this.lastSelectedUsers);
  }

  checkRelated(selected) {
    // 当选中用户与用户列表相等 且 ‘关联所有用户’不为‘是’时
    if (selected.length === this.relatedUserOption.length && this.validateForm.controls.relatedValue.value !== 'Y') {
      this.validateForm.get('relatedValue').setValue('Y');
    }
    // 当选中用户与用户列表不相等 且 已选用户未恢复至上次保存的记录时
    if (selected.length !== this.relatedUserOption.length && this.lastSelectedUsers.length !== selected.length) {
      this.lastSelectedUsers = selected;
      this.validateForm.get('relatedValue').setValue('N');
    }
  }

  submitForm(): void {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  // 是否隐藏已选多选项
  hideOption(control, option) {
    if (this.validateForm.controls[control] && this.validateForm.controls[control].value) {
      return this.validateForm.controls[control].value.indexOf(option) !== -1;
    }
    return false;
  }

  constructor(
    public tenantService: TenantService
  ) { }

  ngOnInit(): void {
    const rowData = this.tenantService.rowData;
    if (rowData) {
      this.validateForm.patchValue({
        tenantName: rowData.name,
        relatedAppSelectedValue: rowData.relatedApp,
        relatedUserSelectedValue: rowData.relatedUser,
        note: rowData.note,
        relatedValue: rowData.relatedAllUser === '否' ? 'NoRelated' : 'related'
      });
    }
    // this.testPut();
  }

  ngOnDestroy(): void {
    this.tenantService.clearData();
  }

  async testPut() {
    const result = await this.tenantService.testPut({
      view: {
        applicationList: [
          {
            id: 0
          },
          {
            id: 1
          }
        ],
        tenant: {
          description: '测试租户',
          name: 'gempile',
          relatedAllUsers: 'Y',
          updatedByUserName: 'admin'
        }
      }
    });
    console.log(result);
  }
}
