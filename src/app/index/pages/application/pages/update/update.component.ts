import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApplicationService} from '../../application.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  relatedTenantOption = ['tenant1', 'tenant2', 'Garnet_123', 'Garnet_3', 'tenant3', 'tenant4', 'tenant5', 'tenant6', 'tenant7'];

  validateForm = new FormGroup({
    appName: new FormControl(null, [Validators.required]),
    appIdentifier: new FormControl(null, [Validators.required]),
    appIndexURL: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
    refreshApi: new FormControl(null),
    host: new FormControl(null),
    relatedTenantSelectedValue: new FormControl(null),
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
    // console.log(this.validateForm.value);
  }

  constructor(
    public myRowDataService: ApplicationService
  ) {
  }

  ngOnInit(): void {
    const rowData = this.myRowDataService.rowData;
    if (rowData) {
      this.validateForm.patchValue({
        appName: rowData.name,
        appIdentifier: rowData.appIdentifier,
        appIndexURL: rowData.appIndexUrl,
        relatedTenantSelectedValue: rowData.relatedUser,
        company: rowData.company,
        refreshApi: rowData.refreshApi,
        host: rowData.host,
      });
    }
  }

  ngOnDestroy(): void {
    this.myRowDataService.clearData();
  }
}
