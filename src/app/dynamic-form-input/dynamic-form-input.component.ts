import { AfterViewChecked, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss'],
})
export class DynamicFormInputComponent
  implements OnInit, OnChanges, AfterViewChecked {
  @Input() jsonData: any;
  @Input() default: any;
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  constructor(private formlyJsonschema: FormlyJsonschema) {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.loadExample();
  }
  ngAfterViewChecked() {}
  loadExample() {
    this.form = new FormGroup({});
    this.options = {};
    this.fields = [this.formlyJsonschema.toFieldConfig(this.jsonData)];
  }

  submit() {}
}
