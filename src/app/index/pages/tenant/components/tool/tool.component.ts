import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IndexService } from 'src/app/index/index.service';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  @Input() tenantList: Array<object>;
  @Output() SearchEmit = new EventEmitter();

  selectedValue;
  appName = '';

  constructor(private indexService: IndexService) {
  }

  ngOnInit() {
  }

  searchEmit(event) {
    // 应用框输入回车时
    if (event && event.keyCode === 13) {
      this.SearchEmit.emit({
        tenant: this.selectedValue,
        application: this.appName
      });
    } else if (event === this.selectedValue) {
    // 租户下拉框进行选择时
      this.SearchEmit.emit({
        tenant: this.selectedValue,
        application: this.appName
      });
    }
  }
}
