import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyComponent } from './dy.component';

describe('DyComponent', () => {
  let component: DyComponent;
  let fixture: ComponentFixture<DyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
