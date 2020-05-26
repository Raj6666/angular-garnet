import { Injectable } from '@angular/core';

interface Data {
  id: number;
  name: string;
  resourceDescription: string;
  pathIdentification: string;
  resourceType: string;
  relatedTenant: string;
  relatedApp: string;
  typeSetting: string;
  createTime: string;
  updateTime: string;
  modifier: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }

  // 修改页面时传递数据
  rowData: Data;

  clearData() {
    this.rowData = null;
  }
}
