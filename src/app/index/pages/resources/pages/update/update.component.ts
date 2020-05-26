import { Component, OnInit, OnDestroy } from '@angular/core';
import {ResourcesService} from '../../resources.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  cardTitle = '新增';
  relatedTenantOption = ['GHIORDG', 'GGgg', 'Garnet_tenant', 'tenant4', 'tenant5', 'tenant6', 'tenant7'];
  relatedAppOption = ['Garnet_app', 'app2', 'app3', 'app4', 'app5', 'app6', 'app7'];
  resourceTypeOption = ['Garnet系统模块', 'resources2', 'resources3', 'resources4'];

  validateForm = new FormGroup({
    resourceName: new FormControl(null, [Validators.required]),
    resourceDescription: new FormControl(null, [Validators.required]),
    pathIdentification: new FormControl(null, [Validators.required]),
    relatedValue: new FormControl(null, [Validators.required]),
    relatedTenantSelectedValue: new FormControl(null, [Validators.required]),
    relatedAppSelectedValue: new FormControl(null, [Validators.required]),
    resourceTypeSelected: new FormControl(null, [Validators.required]),
  });

  submitForm(): void {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

  constructor(
    public myRowDataService: ResourcesService
  ) { }

  ngOnInit(): void {
    const rowData = this.myRowDataService.rowData;
    if (rowData) {
      this.cardTitle = '修改';
      this.validateForm.patchValue({
        resourceName: rowData.name,
        resourceDescription: rowData.resourceDescription,
        pathIdentification: rowData.pathIdentification,
        relatedValue: rowData.resourceType === '租户' ? 'T' : (rowData.resourceType === '应用' ? 'A' : 'T+A'),
        relatedTenantSelectedValue: rowData.relatedTenant,
        relatedAppSelectedValue: rowData.relatedApp,
        resourceTypeSelected: rowData.typeSetting,
      });
    }
  }

  ngOnDestroy(): void {
    this.myRowDataService.clearData();
  }
}
