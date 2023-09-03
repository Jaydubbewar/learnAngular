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
    this.apiService.deleteData(id).subscribe(()=>{this.fetchData()});
  }
  oneRec(id: any) {
    this.apiService.fetchRec(parseInt(id.value, 10)).subscribe((data) => {
      console.log('Data received:', data);
      this.responseData = data;
    }
    );
  }


}
