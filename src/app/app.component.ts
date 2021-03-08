import { Schema } from './models/schema';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(JsonEditorComponent, { static: false })
  editor: JsonEditorComponent;
  public data: any = Schema;
  public newData: any;
  public editorOptions: JsonEditorOptions;
  constructor() {}
  ngOnInit(): void {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
  }
  ngAfterViewInit() {
    this.newData = this.data.schema;
  }
  getData(e) {
    this.newData = e.schema;
  }
}
