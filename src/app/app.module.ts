import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { AppRoutingModule } from './app.routing';
import { ActionsDataGridComponent } from './actions-data-grid/actions-data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    ActionsDataGridComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
