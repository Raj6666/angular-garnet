// tslint:disable: max-line-length
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  static loadTheme(theme: string) {
    document.getElementsByTagName('body')[0].style.setProperty('--headbarLeftColor', theme === 'light' ? '#2469DF' : '#225188');
    document.getElementsByTagName('body')[0].style.setProperty('--headbarRightColor', theme === 'light' ? '#1E92F5' : '#225188');
    document.getElementsByTagName('body')[0].style.setProperty('--headbarTriggerColor', theme === 'light' ? 'rgba(20, 104, 165, 0.8)' : 'rgba(10, 54, 85, 0.8)');
    document.getElementsByTagName('body')[0].style.setProperty('--sidebarBgColor', theme === 'light' ? '#fff' : '#001529');
    document.getElementsByTagName('body')[0].style.setProperty('--sidebarLogoColor', theme === 'light' ? '#2469DF' : '#225188');
    document.getElementsByTagName('body')[0].style.setProperty('--breadcrumbItemColor', theme === 'light' ? 'rgba(0, 0, 0, 0.45)' : '#fff');
    document.getElementsByTagName('body')[0].style.setProperty('--contentBgColor', theme === 'light' ? '' : '#12335b');
  }

}
