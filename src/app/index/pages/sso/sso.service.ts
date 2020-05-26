import { Injectable } from '@angular/core';

interface Data {
  id: number;
  name: string;
  relatedApp: Array<string>;
  createTime: string;
  updateTime: string;
  modifier: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class SsoService {

  constructor() { }

  // 修改页面时传递数据
  rowData: Data;

  clearData() {
    this.rowData = null;
  }
}
