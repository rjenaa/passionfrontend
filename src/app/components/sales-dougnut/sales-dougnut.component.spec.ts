import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDougnutComponent } from './sales-dougnut.component';

describe('SalesDougnutComponent', () => {
  let component: SalesDougnutComponent;
  let fixture: ComponentFixture<SalesDougnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDougnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDougnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
