import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteStudentCoursesComponent } from './website-student-courses.component';

describe('WebsiteStudentCoursesComponent', () => {
  let component: WebsiteStudentCoursesComponent;
  let fixture: ComponentFixture<WebsiteStudentCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteStudentCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteStudentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
