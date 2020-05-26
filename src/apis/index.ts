import { environment } from '../environments/environment';

export const API = {
    // 登录
    login:  environment.host + environment.server_url + '/login',
    // 租户管理
    tenantMgt:  environment.host + environment.server_url + '/tenant'
};
