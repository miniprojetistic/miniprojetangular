import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoketCarDataFormComponent } from './roket-car-data-form.component';

describe('RoketCarDataFormComponent', () => {
  let component: RoketCarDataFormComponent;
  let fixture: ComponentFixture<RoketCarDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoketCarDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoketCarDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
