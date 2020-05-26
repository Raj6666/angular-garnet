import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isVisible;
  @Input() rowData;
  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // 弹框的关闭事件
  handleCancel(): void {
    this.closeEvent.emit();
  }
}
