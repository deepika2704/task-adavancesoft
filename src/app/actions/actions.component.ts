import { Component, OnInit } from '@angular/core';

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
  selectedAction;
  selectedActionAttribute;
  options: any[];

  constructor() { }

  ngOnInit() {
    this.actionsOptions = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
      { value: "4", label: "Four" },
      { value: "5", label: "Five" }
    ]
    this.options = [
      'One',
      'Two',
      'Three',
      'Four'
    ]
  }
  addActions() {
    debugger
    this.selectedAction;
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
    console.log(pos)
  }
}
