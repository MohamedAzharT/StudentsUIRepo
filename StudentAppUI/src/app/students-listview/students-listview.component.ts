import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
@Component({
  selector: 'app-students-listview',
  templateUrl: './students-listview.component.html',
  styleUrl: './students-listview.component.css'
})
export class StudentsListviewComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }
}
