import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceViewComponent } from './edit-device-view.component';

describe('EditDeviceViewComponent', () => {
  let component: EditDeviceViewComponent;
  let fixture: ComponentFixture<EditDeviceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeviceViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeviceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
