import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListviewComponent } from './students-listview.component';

describe('StudentsListviewComponent', () => {
  let component: StudentsListviewComponent;
  let fixture: ComponentFixture<StudentsListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsListviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
