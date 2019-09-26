import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: Http) { }

  //private serverUrl = new ServerInfo().getServerName();
  private serverUrl = "http://localhost:3000/public/appointment/booking";
  postBookingInformation(bookingDetail : any){
      const header = new Headers();
      header.append('Content-Type', 'application/json');

      return this.http.post(this.serverUrl + '/',
      bookingDetail, {headers : header})
      .map(res=>res.json());
  }
}
