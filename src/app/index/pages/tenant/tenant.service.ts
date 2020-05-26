/*
 * @Descripttion: 租户管理服务层
 * @version: 0.1.0
 * @Author: Husiyuan
 * @Date: 2020-05-19 11:05:33
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-22 17:30:51
 */
import { Injectable } from '@angular/core';
// import { HttpService } from 'src/services/http.service';
import { HttpPService } from 'src/services/http-p.service';
import { API } from '../../../../apis/index';

interface Data {
  id: number;
  name: string;
  relatedAllUser: string;
  relatedUser: Array<string>;
  relatedApp: Array<string>;
  createTime: string;
  updateTime: string;
  modifier: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http: HttpPService) {
  }

  // 修改页面时传递数据
  rowData: Data;

  clearData() {
    this.rowData = null;
  }

  // 测试真实 get 请求
  async testGet(name) {
    const params = this.http.parseParams({
      name,
      current: 1,
      size: -1
    });
    const result: any = await this.http.request(
      API.tenantMgt, 'Get',
      { responseType: 'json', params}
    );
    return result.data.records;
  }

  // 测试真实 put 请求
  async testPut(body) {
    console.log(body);
    const result: any = await this.http.request(
      API.tenantMgt, 'Put',
      { responseType: 'json', body}
    );
    console.log(result);
  }

  // 模拟post请求
  testLogin(name, password) {
    return this.http.request(
      '/login', 'Post',
      { responseType: 'json', body: { name, password} }
    );
  }
}
