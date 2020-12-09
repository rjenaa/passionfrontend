import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificStatementComponent } from './specific-statement.component';

describe('SpecificStatementComponent', () => {
  let component: SpecificStatementComponent;
  let fixture: ComponentFixture<SpecificStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
