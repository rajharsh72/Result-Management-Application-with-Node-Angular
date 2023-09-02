import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentResultComponent } from './search-student-result.component';

describe('SearchStudentResultComponent', () => {
  let component: SearchStudentResultComponent;
  let fixture: ComponentFixture<SearchStudentResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchStudentResultComponent]
    });
    fixture = TestBed.createComponent(SearchStudentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
