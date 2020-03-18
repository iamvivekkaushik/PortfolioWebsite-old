import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiotreeComponent } from './biotree.component';

describe('BiotreeComponent', () => {
  let component: BiotreeComponent;
  let fixture: ComponentFixture<BiotreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiotreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiotreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
