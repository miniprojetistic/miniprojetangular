import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoketMainPageComponent } from './roket-main-page.component';

describe('RoketMainPageComponent', () => {
  let component: RoketMainPageComponent;
  let fixture: ComponentFixture<RoketMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoketMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoketMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
