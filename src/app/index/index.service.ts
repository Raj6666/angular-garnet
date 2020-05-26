/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-05-22 17:13:50
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-22 17:20:03
 */
import { Injectable } from '@angular/core';
import { HttpPService } from 'src/services/http-p.service';
import { API } from 'src/apis';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  tenantList: Array<object>;
  applicationList: Array<object>;

  constructor(private http: HttpPService) { }

  /**
   * @desc: 获取租户列表
   * @param: {replace} 是否替换全局租户列表
   * @param: {name} 指定租户名称，不传则查全值
   * @param: {appName} 指定应用名称
   * @return: Array
   */
  async getTenants(replace, name?, appName?) {
    const params = this.http.parseParams({
      name: name ? name : '',
      appName: appName ? appName : '',
      current: 1,
      size: -1
    });
    const result: any = await this.http.request(
      API.tenantMgt, 'Get',
      { responseType: 'json', params}
    );
    if (replace) {
      this.tenantList = result.data.records;
    }
    return result.data.records;
  }

}
