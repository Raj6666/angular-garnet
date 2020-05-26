import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  selectedValue;
  selectedAppValue;
  roleName = '';
  @Input() pageData;

  constructor() {
  }

  ngOnInit() {
  }
}