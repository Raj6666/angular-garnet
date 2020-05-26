import { Injectable } from '@angular/core';

interface Data {
  id: number;
  name: string;
  groupType: string;
  relatedApp: string;
  relatedTenant: string;
  relatedUser: Array<string>;
  relatedRole: Array<string>;
  createTime: string;
  updateTime: string;
  modifier: string;
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  // 修改页面时传递数据
  rowData: Data;

  clearData() {
    this.rowData = null;
  }
}
