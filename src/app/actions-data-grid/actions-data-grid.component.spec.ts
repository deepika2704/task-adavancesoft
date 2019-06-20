import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsDataGridComponent } from './actions-data-grid.component';

describe('ActionsDataGridComponent', () => {
  let component: ActionsDataGridComponent;
  let fixture: ComponentFixture<ActionsDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
