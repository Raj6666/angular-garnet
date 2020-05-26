import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RoleService} from '../../role.service';
import {NzContextMenuService, NzDropdownMenuComponent} from 'ng-zorro-antd/dropdown';
import {NzFormatEmitEvent, NzTreeNode} from 'ng-zorro-antd/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  relatedTenantOption = ['GHIORDG', 'GGgg', '34424', 'tenant_tenant', 'tenant5', 'tenant6', 'tenant7'];
  relatedAppOption = ['app1', 'app2', 'app3', 'app4', 'app5', 'app6', 'app7', 'Application_app'];
  relatedGroupOption = ['group', 'group2', 'group3', 'group4', 'group5', 'group6', 'group7'];

  validateForm = new FormGroup({
    roleName: new FormControl(null, [Validators.required]),
    note: new FormControl(null),
    relatedValue: new FormControl(null, [Validators.required]),
    relatedTenantSelectedValue: new FormControl(null, [Validators.required]),
    relatedAppSelectedValue: new FormControl(null, [Validators.required]),
    relatedGroupSelectedValue: new FormControl(null),
  });


  /* 树形菜单 */
  activedNode: NzTreeNode;
  nodes = [
    {
      title: '模块',
      key: '100',
      actionType: ['write', 'read'],
      expanded: true,
      children: [
        {title: '租户管理', key: '1000', actionType: ['write', 'read'], isLeaf: true},
        {title: '应用管理', key: '1001', actionType: ['write', 'read'], isLeaf: true}
      ]
    },
    {
      title: '按钮',
      key: '101',
      actionType: ['write'],
      children: [
        {title: '租户删除', key: '1010', actionType: ['write', 'read', 'read', 'read'], isLeaf: true},
        {title: '租户新增', key: '1011', actionType: ['write'], isLeaf: true}
      ]
    }
  ];
  selectedNodes = [];
  menu: NzDropdownMenuComponent;


  // 双击展开节点
  openFolder(data: NzFormatEmitEvent): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  /* 树形菜单 */

  // 表单提交
  submitForm(): void {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    // console.log(this.validateForm.value);
    console.log(this.selectedNodes);
  }

  // 是否隐藏已选多选项
  hideOption(control, option) {
    if (this.validateForm.controls[control] && this.validateForm.controls[control].value) {
      return this.validateForm.controls[control].value.indexOf(option) !== -1;
    }
    return false;
  }

  constructor(
    public myRowDataService: RoleService,
    private nzContextMenuService: NzContextMenuService
  ) {
  }

  ngOnInit(): void {
    const rowData = this.myRowDataService.rowData;
    if (rowData) {
      this.validateForm.patchValue({
        roleName: rowData.name,
        relatedValue: rowData.type === '租户' ? 'T' : (rowData.type === '应用' ? 'A' : 'T+A'),
        relatedTenantSelectedValue: rowData.relatedTenant,
        relatedAppSelectedValue: rowData.relatedApp,
        relatedGroupSelectedValue: rowData.relatedGroup,
        note: rowData.note,
      });
    }
  }

  ngOnDestroy(): void {
    this.myRowDataService.clearData();
  }
}
