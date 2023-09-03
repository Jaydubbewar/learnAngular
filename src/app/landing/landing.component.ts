import { Component } from '@angular/core';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  data: any;

  constructor(private apiService: ApiService) {
    // this.data = this.apiService.getData();
    // console.log(JSON.stringify(this.data));
    // this.fetchData();
  }
  responseData: any

  fetchData() {
    this.apiService.getData().subscribe(
      (data) => {
        console.log('Data received:', data);
        this.responseData = data;
      }
    );
  }

  delData(id: number) {
    this.apiService.deleteData(id).subscribe(() => { this.fetchData() });
  }

  oneRec(id: any) {
    this.apiService.fetchRec(parseInt(id.value, 10)).subscribe((data) => {
      console.log('Data received:', data);
      this.responseData = data;
    }
    );
  }

  postRec(idp:any,namep:any,agep:any,phonep:any,coursep:any){
    const sendData = {id: parseInt(idp.value, 10), name: namep.value, age: parseInt(agep.value, 10), phoneNumber: phonep.value, courseId: parseInt(coursep.value, 10)};
    // const sendData = {id: 35, name: 'rahul', age: 24, phoneNumber: '1236547890', courseId: 101};
    this.apiService.pushData(sendData).subscribe((response) => {
      console.log('Data sent:', response);
      this.fetchData();
    }
    );
  }


}
