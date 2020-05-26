import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  selectedTenantValue;
  selectedAppValue;
  permissionName = '';

  constructor() { }

  ngOnInit() {
  }

}
