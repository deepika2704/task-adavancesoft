import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Override } from '../common-grid/models/override';
import { ColumnType } from '../common-grid/models/ColumnType';
import { Columns } from '../common-grid/models/Columns';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { element } from 'protractor';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  actionsOptions;
  actions: any = [];
  actionsAttribute: any = [];
  toShowAction: boolean = false;
  toShowActionAttribute: boolean = false;
  selectedActionAttribute;
  options: any[];
  columns: Columns[];
  rows: any;
  selectedAction: string;
  selectedAttributes: any[] = [];

  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.actionsOptions = [
      { value: 'One', label: 'One' },
      { value: 'Two', label: 'Two' },
      { value: 'Three', label: 'Three' },
      { value: 'Four', label: 'Four' },
      { value: 'Five', label: 'Five' }
    ]
    this.options = [
      'One',
      'Two',
      'Three',
      'Four'
    ]
    this.appservice.getAttributes().then(resp => {
      this.rows = resp;
    });
    this.columns = this.appservice.generateColumn(this.gridInit());
  }

  gridInit(): Override[] {
    const override: Override[] = [
      { columnName: 'Pn', name: 'PN', colType: ColumnType.Number },
      { columnName: 'Description', name: 'Description', colType: ColumnType.String },
      { columnName: 'ItemsClassifications', name: 'Items Classifications', colType: ColumnType.String },
      { columnName: 'Qty', name: 'Qty', colType: ColumnType.Number },
      { columnName: 'UOM', name: 'UOM', colType: ColumnType.Number },
      { columnName: 'Condition', name: 'Condition', colType: ColumnType.String },
      { columnName: 'UnitCost', name: 'Unit Cost', colType: ColumnType.Number },
      { columnName: 'ExtCost', name: 'Extra Cost', colType: ColumnType.Number },
      { columnName: 'Provission', name: 'Provission', colType: ColumnType.String },
      { columnName: 'Deffered', name: 'Deffered', colType: ColumnType.String },
      { columnName: 'FigureId', name: 'Figure Id', colType: ColumnType.Number },
    ];
    return override;
  }

  addActions() {
    // if(this.actions.length>0)
    // this.actions.forEach(element => {
    //   if(element!=this.selectedAction ){
    //     this.actions.push(this.selectedAction);
    //   }
    // });
    // else{
    this.actions.push(this.selectedAction);
    // }
    this.toShowAction = true;
  }
  addActionsAttributes() {
    this.actionsAttribute.push(this.selectedActionAttribute);

    this.toShowActionAttribute = true;
  }
  selectedOptions(pos) {
    this.selectedAttributes = []
    pos.forEach(element => {
      this.selectedAttributes.push(this.options[element]);
    });
    console.log(this.selectedAttributes)
  }
}
