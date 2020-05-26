import { Injectable } from '@angular/core';

interface Data {
  id: number;
  name: string;
  relatedTenant: Array<string>;
  relatedGroup: Array<string>;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  createTime: string;
  updateTime: string;
  modifier: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  // 修改页面时传递数据
  rowData: Data;

  clearData() {
    this.rowData = null;
  }
}
