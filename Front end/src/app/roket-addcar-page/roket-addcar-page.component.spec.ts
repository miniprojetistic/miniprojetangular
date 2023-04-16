import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoketAddcarPageComponent } from './roket-addcar-page.component';

describe('RoketAddcarPageComponent', () => {
  let component: RoketAddcarPageComponent;
  let fixture: ComponentFixture<RoketAddcarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoketAddcarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoketAddcarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
