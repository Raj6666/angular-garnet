import { Injectable } from '@angular/core';

interface Data {
  id: number;
  name: string;
  appIdentifier: string;
  appIndexUrl: string;
  relatedUser: Array<string>;
  company: string;
  refreshApi: string;
  host: string;
  createTime: string;
  updateTime: string;
  modifier: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  // 修改页面时传递数据
  rowData: Data;

  clearData() {
    this.rowData = null;
  }
}
