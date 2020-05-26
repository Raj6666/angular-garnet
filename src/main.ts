// tslint:disable: max-line-length
/*
 * @Descripttion: 项目启动文件
 * @version: 1.0
 * @Author: Husiyuan
 * @Date: 2020-05-07 17:32:37
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-07 18:49:47
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ThemeService } from './services/theme.service';

if (environment.production) {
  enableProdMode();
}

ThemeService.loadTheme(environment.theme);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
