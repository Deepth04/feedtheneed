import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceComponent } from './acceptance.component';

describe('AcceptanceComponent', () => {
  let component: AcceptanceComponent;
  let fixture: ComponentFixture<AcceptanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptanceComponent]
    });
    fixture = TestBed.createComponent(AcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
