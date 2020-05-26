import { Injectable } from '@angular/core';

interface Data {
  id: number;
  name: string;
  type: string;
  relatedTenant: string;
  relatedApp: string;
  relatedGroup: Array<string>;
  permissionList: Array<string>;
  createTime: string;
  updateTime: string;
  modifier: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  // 修改页面时传递数据
  rowData: Data;

  clearData() {
    this.rowData = null;
  }
}
