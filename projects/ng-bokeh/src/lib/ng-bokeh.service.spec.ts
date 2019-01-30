import { TestBed } from '@angular/core/testing';

import { NgBokehService } from './ng-bokeh.service';

describe('NgBokehService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBokehService = TestBed.get(NgBokehService);
    expect(service).toBeTruthy();
  });
});
