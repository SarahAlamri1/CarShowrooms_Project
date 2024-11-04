import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustemInputComponent } from './custem-input.component';

describe('CustemInputComponent', () => {
  let component: CustemInputComponent;
  let fixture: ComponentFixture<CustemInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustemInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
