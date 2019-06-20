import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  actionsOptions;
  toShowActionAttribute:boolean=false;

  constructor() { }

  ngOnInit() {
    this.actionsOptions=[
      {value:"1",label:"One"},
      {value:"2",label:"Two"},
      {value:"3",label:"Three"},
      {value:"4",label:"Four"},
      {value:"5",label:"Five"}
    ]
  }
  addActions(){
    this.toShowActionAttribute=true;
  }
}
