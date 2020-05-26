import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../../group.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  relatedTenantOption = ['tenant', 'tenant2', 'tenant3', 'tenant4', 'tenant5', 'tenant6', 'tenant7', 'tenant8'];
  relatedAppOption = ['app1', 'app22', 'app33', 'app44', 'app55', 'app66', 'app77'];
  relatedUserOption = ['user', 'user2', 'user123', 'user23', 'user3', 'user6', 'user7'];
  relatedRoleOption = ['role1', 'role2', 'role3', 'role4', 'role5', 'role6', 'role7'];

  validateForm = new FormGroup({
    groupName: new FormControl(null, [Validators.required]),
    relatedValue: new FormControl(null, [Validators.required]),
    relatedTenantSelectedValue: new FormControl(null, [Validators.required]),
    relatedAppSelectedValue: new FormControl(null, [Validators.required]),
    relatedUserSelectedValue: new FormControl(null, [Validators.required]),
    relatedRoleSelectedValue: new FormControl(null, [Validators.required]),
  });

  // 是否隐藏已选多选项
  hideOption(control, option) {
    if (this.validateForm.controls[control] && this.validateForm.controls[control].value) {
      return this.validateForm.controls[control].value.indexOf(option) !== -1;
    }
    return false;
  }

  submitForm(): void {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

  constructor(
    public myRowDataService: GroupService
  ) {
  }

  ngOnInit(): void {
    const rowData = this.myRowDataService.rowData;
    if (rowData) {
      this.validateForm.patchValue({
        groupName: rowData.name,
        relatedValue: rowData.groupType === '租户' ? 'T' : (rowData.groupType === '应用' ? 'A' : 'T+A'),
        relatedAppSelectedValue: rowData.relatedApp,
        relatedTenantSelectedValue: rowData.relatedUser,
        relatedUserSelectedValue: rowData.relatedUser,
        relatedRoleSelectedValue: rowData.relatedRole,
      });
    }
  }

  ngOnDestroy(): void {
    this.myRowDataService.clearData();
  }
}
