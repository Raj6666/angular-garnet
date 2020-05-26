import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  validateForm: FormGroup;
  relatedTenantOption = ['tenant1', 'tenant2', 'Garnet', 'tenant3', 'tenant4', 'tAat4', 'tenant5', 'tenant6', 'tenant7', 'tenant8', 'tenant9', 'tenant10', 'tenant11', 'tenant12', 'tenant13', 'tenant14', 'tenant15', 'tenant16', 'tenant17', 'tenant18', 'tenant19', 'tenant20'];
  relatedGroupOption = ['Group1', 'group2', 'app3', 'group4', 'group5', 'group6', 'group7', 'Garnet'];

  // 检查确认密码
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  // 提交表单
  submitForm(): void {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

  // 密码输入框
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  constructor(
    public myRowDataService: UsersService
  ) {}

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null),
      phone: new FormControl(null),
      password: new FormControl(null, [Validators.required]),
      checkPassword: new FormControl(null, [Validators.required, this.confirmationValidator]),
      relatedTenantSelectedValue: new FormControl(null, [Validators.required]),
      relatedGroupSelectedValue: new FormControl(null, [Validators.required]),
    });

    const rowData = this.myRowDataService.rowData;
    if (rowData) {
      this.validateForm.patchValue({
        userName: rowData.name,
        email: rowData.email,
        phone: rowData.phone,
        password: rowData.password,
        checkPassword: rowData.confirmPassword,
        relatedTenantSelectedValue: rowData.relatedTenant,
        relatedGroupSelectedValue: rowData.relatedGroup,
      });
    }
  }
  ngOnDestroy(): void {
    this.myRowDataService.clearData();
  }

  // 是否隐藏已选多选项
  hideOption(control, option) {
    if (this.validateForm.controls[control] && this.validateForm.controls[control].value) {
      return this.validateForm.controls[control].value.indexOf(option) !== -1;
    }
    return false;
  }
}
