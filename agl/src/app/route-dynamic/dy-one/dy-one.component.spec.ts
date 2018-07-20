import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyOneComponent } from './dy-one.component';

describe('DyOneComponent', () => {
  let component: DyOneComponent;
  let fixture: ComponentFixture<DyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
