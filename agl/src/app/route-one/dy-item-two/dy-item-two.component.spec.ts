import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyItemTwoComponent } from './dy-item-two.component';

describe('DyItemTwoComponent', () => {
  let component: DyItemTwoComponent;
  let fixture: ComponentFixture<DyItemTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyItemTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyItemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
