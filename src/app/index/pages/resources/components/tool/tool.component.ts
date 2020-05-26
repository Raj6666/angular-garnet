import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  resourceName = '';
  selectedTenantValue;
  selectedAppValue;
  selectedTypeValue;

  constructor() {
  }

  ngOnInit() {
  }
}
