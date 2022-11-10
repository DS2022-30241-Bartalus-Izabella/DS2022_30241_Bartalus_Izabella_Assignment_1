import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomePageViewComponent } from './admin-home-page-view.component';

describe('AdminHomePageViewComponent', () => {
  let component: AdminHomePageViewComponent;
  let fixture: ComponentFixture<AdminHomePageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomePageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHomePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
