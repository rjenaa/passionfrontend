import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBarComponent } from './sales-bar.component';

describe('SalesBarComponent', () => {
  let component: SalesBarComponent;
  let fixture: ComponentFixture<SalesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
