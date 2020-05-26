import { Component, OnInit, OnDestroy } from '@angular/core';
import {SsoService} from '../../sso.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  note = '';
  ssoName = '';
  relatedAppOption = ['app1', 'app2', 'app3', 'app4', 'app5', 'app6', 'app7'];
  relatedAppSelectedValue: string[] = [];

  constructor(
    public myRowDataService: SsoService
  ) { }

  ngOnInit(): void {
    const rowData = this.myRowDataService.rowData;
    if (rowData) {
      this.ssoName = rowData.name;
      this.relatedAppSelectedValue = rowData.relatedApp;
      this.note = rowData.note;
    }
  }

  ngOnDestroy(): void {
    this.myRowDataService.clearData();
  }
}
