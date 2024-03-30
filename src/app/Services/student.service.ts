import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) {}

  submitStudent(inputData : object){
    return this.httpClient.post(`http://localhost:8080/api/students`, inputData);
  }
}

