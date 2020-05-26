import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss']
})
export class BoxListComponent implements OnInit, OnChanges {
  @Input() listData;
  list: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.list = [];
    const newData = this.listData;
    if (typeof newData === 'string') {
      this.list.push(newData);
    } else {
      this.list = newData;
    }
  }

}
