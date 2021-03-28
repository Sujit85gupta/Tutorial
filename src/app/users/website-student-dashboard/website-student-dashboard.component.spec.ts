import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteStudentDashboardComponent } from './website-student-dashboard.component';

describe('WebsiteStudentDashboardComponent', () => {
  let component: WebsiteStudentDashboardComponent;
  let fixture: ComponentFixture<WebsiteStudentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteStudentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteStudentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
