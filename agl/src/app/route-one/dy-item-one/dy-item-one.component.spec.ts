import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyItemOneComponent } from './dy-item-one.component';

describe('DyItemOneComponent', () => {
  let component: DyItemOneComponent;
  let fixture: ComponentFixture<DyItemOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyItemOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyItemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
