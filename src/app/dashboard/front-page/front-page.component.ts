import { Component, OnInit } from '@angular/core';
import {Camera} from '../../@core/data/camera';
@Component({
  selector: 'ngx-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  cameras: Camera[];
  selectedCamera: Camera;
  isSingleView = false;
  title: string = 'My first AGM project';
  lat: number = 27.7265892;
  lng: number = 85.3021687;

  items:Array<String> = ["Apple", "mango", "orange"]
  constructor() { 
  }

  ngOnInit() {
    this.cameras = [
      {
        title: "First",
        source : "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/Picture1.png"
      },
      {
        title: "Second",
        source : "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/Picture39.png"
      },
      {
        title: "Third",
        source : "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/Picture40.png"
      },
    ]
    this.selectedCamera = this.cameras[0];

    console.log(this.cameras)
    console.log(this.selectedCamera);

  }

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}
