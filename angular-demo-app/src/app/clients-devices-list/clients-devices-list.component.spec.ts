import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDevicesListComponent } from './clients-devices-list.component';

describe('ClientsDevicesListComponent', () => {
  let component: ClientsDevicesListComponent;
  let fixture: ComponentFixture<ClientsDevicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsDevicesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsDevicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
