import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResourceTypeService} from '../../resource-type.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  // validateForm: FormGroup;
  relatedTenantOption = ['Garnet_123', 'tenant2', 'tenant3', 'tenant4', 'tenant5', 'tenant6', 'tenant7'];
  relatedAppOption = ['Garnet_3', 'app2', 'app3', 'app4', 'app5', 'app6', 'app7'];
  relatedTenantSelectedValue;
  relatedAppSelectedValue;

  listOfControl: Array<{ id: number; controlInstance: string }> = []; // 动态表单

  validateForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    codeName: new FormControl(null, [Validators.required]),
    typeDescription: new FormControl(null, [Validators.required]),
    resourceType: new FormControl(null, [Validators.required]),
    relatedApp: new FormControl(null, [Validators.required]),
    relatedTenantSelectedValue: new FormControl(null, [Validators.required]),
    relatedAppSelectedValue: new FormControl(null, [Validators.required]),
    actionGroup: new FormControl(null, [Validators.required]),
    fieldType: new FormControl(null),
  });

  submitForm(): void {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  // 添加表单
  addField(type?, e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;
    const fieldType = type ? type : this.validateForm.controls.fieldType.value;

    const control = {
      id,
      controlInstance: `field-${fieldType}-${id}`
    };
    const index = this.listOfControl.push(control);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null)
    );
  }

  // 减少表单
  removeField(i: { id: number; type: string; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  constructor(
    public myRowDataService: ResourceTypeService
  ) {}

  ngOnInit(): void {
    const rowData = this.myRowDataService.rowData;
    console.log(rowData);
    if (rowData) {
      this.validateForm.patchValue({
        name: rowData.name,
        codeName: rowData.codeName,
        typeDescription: rowData.typeDescription,
        resourceType: rowData.resourceType === '租户' ? 'T' : (rowData.resourceType === '应用' ? 'A' : 'T+A'),
        relatedApp: rowData.relatedApp,
        relatedTenantSelectedValue: rowData.relatedTenant,
        relatedAppSelectedValue: rowData.relatedApp,
        actionGroup: rowData.actionGroup,
      });
      rowData.fieldList.forEach((item: any, index) => {
        this.addField(item.fieldType);
        this.validateForm.get(`field-${item.fieldType}-${index}`).setValue(item.fieldContent);
      });
    } else {
      this.addField('字符型');
    }
  }
  ngOnDestroy(): void {
    this.myRowDataService.clearData();
  }
}
