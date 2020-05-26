import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { HttpPService } from 'src/services/http-p.service';
import { API } from 'src/apis';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private http: HttpPService
  ) {
  }

  ngOnInit() {
    if (this.auth.checkIsLogin()) {
      this.router.navigate(['/index'], { preserveQueryParams: true, replaceUrl: true });
    }
    this.getCaptcha();
  }

  async getCaptcha() {
    const result: any = await this.http.request(
      API.login, 'Get',
      { responseType: 'json'}
    );
    // console.log(result);
  }
}
