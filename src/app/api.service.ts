import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://localhost:7239/api/Stud');
  }
  deleteData(id:number){
    return this.http.delete(`https://localhost:7239/api/Stud/${id}`)
  }
  fetchRec(id:number){
    return this.http.get(`https://localhost:7239/api/Stud/${id}`)
  }
}
