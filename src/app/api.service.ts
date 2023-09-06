import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //Stud-student api
  getData() {
    return this.http.get('https://localhost:7239/api/Stud');
  }
  deleteData(id:number){
    return this.http.delete(`https://localhost:7239/api/Stud/${id}`)
  }
  fetchRec(id:number){
    return this.http.get(`https://localhost:7239/api/Stud/${id}`)
  }
  pushData(data:any){
    return this.http.post('https://localhost:7239/api/Stud',data);
  }
  putData(data:any){
    return this.http.put(`https://localhost:7239/api/Stud/${data.id}`,data)
  }

  //Course-student api
  getCourse() {
    return this.http.get('https://localhost:7239/api/Course');
  }
  deleteCourse(id:number){
    return this.http.delete(`https://localhost:7239/api/Course/${id}`)
  }
  fetchCourse(id:number){
    return this.http.get(`https://localhost:7239/api/Course/${id}`)
  }
  pushCourse(data:any){
    return this.http.post('https://localhost:7239/api/Course',data);
  }
  putCourse(data:any){
    return this.http.put(`https://localhost:7239/api/Course/${data.courseId}`,data)
  }
}
