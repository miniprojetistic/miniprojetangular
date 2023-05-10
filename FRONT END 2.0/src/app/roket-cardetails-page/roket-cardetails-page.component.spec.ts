import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoketCardetailsPageComponent } from './roket-cardetails-page.component';

describe('RoketCardetailsPageComponent', () => {
  let component: RoketCardetailsPageComponent;
  let fixture: ComponentFixture<RoketCardetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoketCardetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoketCardetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
