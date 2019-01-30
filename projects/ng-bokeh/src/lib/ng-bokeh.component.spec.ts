import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBokehComponent } from './ng-bokeh.component';

describe('NgBokehComponent', () => {
  let component: NgBokehComponent;
  let fixture: ComponentFixture<NgBokehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBokehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBokehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
