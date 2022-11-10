import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesListViewComponent } from './devices-list-view.component';

describe('DevicesListViewComponent', () => {
  let component: DevicesListViewComponent;
  let fixture: ComponentFixture<DevicesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
