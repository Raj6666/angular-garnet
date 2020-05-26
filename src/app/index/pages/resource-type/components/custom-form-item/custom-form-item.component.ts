import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-custom-form-item',
  templateUrl: './custom-form-item.component.html',
  styleUrls: ['./custom-form-item.component.scss']
})
export class CustomFormItemComponent implements OnInit {

  relatedType = '字符型';


  validateForm: FormGroup;
  listOfControl: Array<{ id: number; type: string; controlInstance: string }> = [];

  // 添加表单
  addField(type: string, e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      type,
      controlInstance: `passenger${id}`
    };
    const index = this.listOfControl.push(control);
    // console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  // 减少表单
  removeField(i: { id: number; type: string; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      // console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({});
    this.addField('字符型');
  }
}
