import { Component,ViewChild, AfterContentInit, Input} from '@angular/core';
import { UserInformationComponent } from './user-information/user-information.component';
import { DateDoctorComponent } from './date-doctor/date-doctor.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NbStepperComponent } from '@nebular/theme';
import { BookingService } from './booking.service';

@Component({
  selector: 'ngx-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent{
  

  @ViewChild('stepper') stepper1: NbStepperComponent;
  
  @ViewChild(UserInformationComponent) userInformationComp : UserInformationComponent;
  @ViewChild(DateDoctorComponent) dateDoctorComponent : DateDoctorComponent;
  @ViewChild(ConfirmationComponent) confirmationComponent : ConfirmationComponent;

  constructor(private bookingService : BookingService){}

  userForm : any;
  apptForm : any; 
  bookingForm : any;
  bookingResult :any;
  bookingError :any;

  get userInfoForm() {
    return this.userInformationComp ? this.userInformationComp.userInfoForm : null;
  }

  get appointmentFrm() {
    return this.dateDoctorComponent ? this.dateDoctorComponent.appointmentFrm : null;
  }

  get confirmationFrm() {
    return this.confirmationComponent ? this.confirmationComponent.confirmationFrm : null;
  }

  validateUser($event:any){
    this.userForm = $event;
    this.stepper1.next();
  }

  validateTime($event: any){
    this.apptForm = $event;
    this.apptForm.bookingDate = new Date();
    this.userForm.appointment = this.apptForm;
    this.bookingForm = { ...this.userForm};
    this.bookingService.postBookingInformation(this.bookingForm).subscribe(
      (results:any) => {
          this.bookingResult = results;
          this.stepper1.next();
      },
      (error) => {
        var messages = JSON.stringify(error.json());
        this.bookingError = messages;
      }
  );

  }
}
