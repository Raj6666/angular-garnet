import { Injectable } from '@angular/core';

interface Data {
  id: number;
  name: string;
  codeName: string;
  resourceType: string;
  relatedApp: string;
  relatedTenant: string;
  actionGroup: string;
  fieldType: Array<string>;
  fieldContent: Array<string>;
  fieldList: Array<string>;
  typeDescription: string;
  createTime: string;
  updateTime: string;
  modifier: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResourceTypeService {

  constructor() { }

  // 修改页面时传递数据
  rowData: Data;

  clearData() {
    this.rowData = null;
  }
}
