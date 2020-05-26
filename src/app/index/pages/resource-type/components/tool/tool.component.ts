import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool-application',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  selectedValue;
  resourceTypeName = '';

  constructor() {
  }

  ngOnInit() {
  }

}
