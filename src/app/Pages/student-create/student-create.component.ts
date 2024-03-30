import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {StudentService} from "../../Services/student.service";
import {LoaderComponent} from "../Partials/loader/loader.component";

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgIf,
    LoaderComponent,


  ],
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent {


  constructor(private studentService: StudentService) {}
  /*name: any
  course:any
  email: any
  phone: any*/

  name!: string
  course!: string
  email!: string
  phone!: string

  errors: any = [];

  isLoadinig : boolean = false;
  loadingTitle : string = 'Loading';

  submitStudent() {

    this.isLoadinig = true;
    this.loadingTitle = 'Saving';
    var inputData = {
      name: this.name,
      course: this.course,
      email: this.name,
      phone: this.phone,
    }

    this.studentService.submitStudent(inputData).subscribe({
      next:(res:any)=> {
        console.log(res,'response' );
        alert(res.message);
        this.name = '';
        this.course = '';
        this.email = '';
        this.phone = '';

        this.isLoadinig = false;

      },
      error:(err:any) =>{
        this.errors = err.error.errors;
        this.isLoadinig = false
        console.log(err.error.errors,'errors')
      }
    })
  }
}
