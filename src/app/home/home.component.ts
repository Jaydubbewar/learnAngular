import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  responseData: any
  data: any;
  id:number=0;
  courseName:string='';
  duration:string='';
  mentor:string='';

  constructor(private apiService: ApiService){
  
  }


  fetchCourse() {
    this.apiService.getCourse().subscribe(
      (data) => {
        console.log('Data received:', data);
        this.responseData = data;
      }
    );
  }

  delCourse(id: number) {
    this.apiService.deleteCourse(id).subscribe(() => { this.fetchCourse() });
  }

  oneCourse(id: any) {
    console.log(parseInt(id.value))
    const arr: Object[]=[]
    this.apiService.fetchCourse(parseInt(id.value)).subscribe((data) => {
      console.log('Data received:', data);
      arr.push(data);
      this.responseData = arr;
    }
    );
  }

  postCourse(idp:any,namep:any,mentor:any,duration:any){
    const sendData = {courseId: parseInt(idp.value), courseName: namep.value, mentor: mentor.value,duration:duration.value};
    console.log(sendData);
    this.apiService.pushCourse(sendData).subscribe((response) => {
      console.log('Data sent:', response);
      this.fetchCourse();
    }
    );
  }

  updateCourse(dta:any){
    this.id = dta.courseId;
    this.courseName=dta.courseName;
    this.mentor = dta.mentor;
    this.duration = dta.duration;
    console.log(this.id,this.courseName,this.mentor,this.duration)
  }

  setCourse(){
    const newDta = {courseId:this.id,courseName:this.courseName,mentor:this.mentor,duration:this.duration};
    console.log(newDta);
    this.apiService.putCourse(newDta).subscribe((response) => {
      console.log('Data updated:', response);
      this.fetchCourse();
    }
    );
    alert("data updated");
  }

}
