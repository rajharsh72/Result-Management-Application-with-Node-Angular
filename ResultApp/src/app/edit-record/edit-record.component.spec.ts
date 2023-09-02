import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordComponent } from './edit-record.component';

describe('EditRecordComponent', () => {
  let component: EditRecordComponent;
  let fixture: ComponentFixture<EditRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecordComponent]
    });
    fixture = TestBed.createComponent(EditRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
