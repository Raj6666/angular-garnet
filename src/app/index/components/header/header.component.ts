/*
 * @Descripttion:
 * @version:
 * @Author: Husiyuan
 * @Date: 2020-04-24 11:11:57
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-05-07 12:21:48
 */
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  @Input() isCollapsed: boolean;
  @Input() user: string;
  @Output() CollapseClick = new EventEmitter();

  ngOnInit() {
    this.elementRef.nativeElement.replaceWith(document.getElementById('headerContainer'));
  }

  collapseClick() {
    this.CollapseClick.emit(this.isCollapsed);
  }

}
