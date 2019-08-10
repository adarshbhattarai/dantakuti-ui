import { Component, OnInit } from '@angular/core';
import { ServiceData } from '../../@core/data/sewa';

@Component({
  selector: 'ngx-sewa',
  templateUrl: './sewa.component.html',
  styleUrls: ['./sewa.component.scss']
})
export class SewaComponent implements OnInit {

  dantasewa : any[];
  constructor(private sewaService : ServiceData) { 

    this.sewaService.getServices().subscribe( (services) =>{
      this.dantasewa = services;
    });
  }

  ngOnInit() {
  }

}
