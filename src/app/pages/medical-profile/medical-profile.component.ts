import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ngx-medical-profile',
  templateUrl: './medical-profile.component.html',
  styleUrls: ['./medical-profile.component.scss']
})
export class MedicalProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }
  hello(){
    console.log("Hi There hello");

    return this.http.get("http://localhost:8080/rest/users/").subscribe(x=>{
      console.log(x);
    })
  }

  ngOnInit() {
  }
}