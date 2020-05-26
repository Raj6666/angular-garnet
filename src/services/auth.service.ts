import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private common: CommonService
  ) { }

  checkIsLogin() {
    return !this.common.isNull(localStorage.getItem('token'));
  }

}
