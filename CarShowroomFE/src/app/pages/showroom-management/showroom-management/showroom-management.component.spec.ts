import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomManagementComponent } from './showroom-management.component';

describe('ShowroomManagementComponent', () => {
  let component: ShowroomManagementComponent;
  let fixture: ComponentFixture<ShowroomManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowroomManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
