import {Component, OnInit, OnDestroy} from '@angular/core';
import {PermissionService} from '../../permission.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  relatedTenantOption = ['garnet_tenant', 'tenant1', 'tenant2', 'tenant3', 'tenant4', 'tenant5', 'tenant6', 'tenant7'];
  relatedAppOption = ['garnet_application', 'app1', 'app2', 'app3', 'app4', 'app5', 'app6', 'app7'];

  validateForm = new FormGroup({
    permissionName: new FormControl(null, [Validators.required]),
    typeValue: new FormControl(null, [Validators.required]),
    wildcard: new FormControl(null, [Validators.required]),
    action: new FormControl(null, [Validators.required]),
    note: new FormControl(null),
    relatedTenantSelectedValue: new FormControl(null, [Validators.required]),
    relatedAppSelectedValue: new FormControl(null, [Validators.required]),
  });

  submitForm(): void {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

  constructor(
    public myRowDataService: PermissionService
  ) {
  }

  ngOnInit(): void {
    const rowData = this.myRowDataService.rowData;
    if (rowData) {
      this.validateForm.patchValue({
        permissionName: rowData.name,
        typeValue: rowData.permissionType === '租户' ? 'T' : (rowData.permissionType === '应用' ? 'A' : 'T+A'),
        relatedTenantSelectedValue: rowData.relatedTenant,
        relatedAppSelectedValue: rowData.relatedApp,
        wildcard: rowData.wildcard,
        action: rowData.action,
        note: rowData.note,
      });
    }
  }

  ngOnDestroy(): void {
    this.myRowDataService.clearData();
  }
}
