import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { AppRoutingModule } from './app.routing';
import { ActionsDataGridComponent } from './actions-data-grid/actions-data-grid.component';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { CommonGridComponent } from './common-grid/common-grid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    ActionsDataGridComponent,
    MultiSelectDropdownComponent,
    CommonGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
