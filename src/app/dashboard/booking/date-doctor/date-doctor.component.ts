import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';

declare var $: any;
@Component({
  selector: 'ngx-date-doctor',
  templateUrl: './date-doctor.component.html',
  styleUrls: ['./date-doctor.component.scss']
})
export class DateDoctorComponent{

  //Emit the time to booking component after submit
  @Output() appointmentTimeForm = new EventEmitter();

  //Booking Error If Present
  error:any;

  //Available Times, Initialize the array
  availableTimes=[[]];

  //Booking Error sent back from Booking Services if any errors are returned from backend.
  @Input()
  public set bookingError(error : any){
    if(error != null){
      var errorJson =JSON.parse(error).messages;
      this.error = errorJson;
      var amIndex=0,pmIndex=0
      //APIResponse send messages on error. Check Java API Response Object
      if(errorJson.length>0){
        let am =[] ,pm=[];
        for( var err of errorJson){
          //Check if the last two characters are am or pm and accordingly populate to the list
          if(err.slice(-2) === 'am'){
            am.push(err);
          }else if(err.slice(-2) === 'pm'){
            pm.push(err);
          }
        } 
        while(amIndex<am.length || pmIndex<pm.length){
            let times=[];
            if(amIndex<am.length){
              times.push(am[amIndex++]);
            }else{
              times.push(null);
            }
            if(pmIndex<pm.length){
              times.push(pm[pmIndex++]);
            }  
            this.availableTimes.push(times);
        }

        // if( am.length == 0) ){
        //     //If am time and pm time are not available, ask user to select other date.
        //     this.availableTimes = null;
        // }
      }else{
        this.error=null;
      }
    }
  }
  //bookingError : any;
  
  bookDate = new Date();
  time: String;
  min = new Date();
  appointmentFrm: FormGroup;
  constructor(private fb: FormBuilder,private atp: AmazingTimePickerService,) {
    //this.time = ("0" + this.date.getHours()).slice(-2)+":"+("0" + this.date.getMinutes()).slice(-2);
    this.time = '09:00'
    this.appointmentFrm = this.fb.group({
      appointmentDate : new FormControl(this.bookDate),
      appointmentTime : new FormControl(this.time),
    })
    //User is trying to book after 5:00 pm, schedule from tomorrow
    if(this.bookDate.getHours() > 17){
        this.bookDate.setDate(this.bookDate.getDate()+1);
    }else if(this.bookDate.getHours() <17){ //If user is trying to book before five he can book at current time
      this.time = ("0" + this.bookDate.getHours()).slice(-2)+":"+("00");
      this.min.setDate(this.min.getDate()-1);
      this.appointmentFrm.patchValue({appointmentTime:this.time})
    }
  }

  open(ev: any) {
    ev.preventDefault();
    ev.stopPropagation();
    const amazingTimePicker = this.atp.open(
      {
        time:  '09:00',
        theme: 'dark',
        onlyHour: true,
        arrowStyle: {
            background: 'red',
            color: 'white'
        },
      //   rangeTime: {
      //     start: '08:00',
      //     end: '19:00'
      // },
      }
      
    );
    amazingTimePicker.afterClose().subscribe(time => {
      this.time = time;
      this.appointmentFrm.patchValue({appointmentTime:this.time})
    });
  }

  appointmentSubmit() {
    this.appointmentFrm.markAsDirty();
    this.appointmentTimeForm.emit(this.appointmentFrm.value);
  }

  /** Patch Date value when changed on appointment form*/
  handleDateChange(ev:any){
    this.appointmentFrm.patchValue({appointmentDate:ev});
  }


  //Parse and set time
  setTime(event){
      //this.time =event;
      //Matches times separated by : "12:30" will be [12,30], 2:30 pm => transformsTo [2,30]
      var selectedTime = event.match(/\d*\d+/g);
      var selectedHour = Number(selectedTime[0]);
      var selectedMin = Number(selectedTime[1]);
      var AMPM = event.match(/\s(.*)$/)[1]; //Match anything after space
      if(AMPM ==="pm" && selectedHour <12){
          selectedHour+=12; //if it is pm convert it to 24 hr time, 1:00 pm becomes 13 pm
      }
      //if time is less than 10 which is 0 append 0 as well
      this.time = (selectedHour<10?"0":"")+selectedHour+":"+(selectedMin<10?"0":"")+selectedMin;
      //patch value to the form
      this.appointmentFrm.patchValue({appointmentTime:this.time})
  }
}
