import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponenetComponent } from './admin-componenet.component';

describe('AdminComponenetComponent', () => {
  let component: AdminComponenetComponent;
  let fixture: ComponentFixture<AdminComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
