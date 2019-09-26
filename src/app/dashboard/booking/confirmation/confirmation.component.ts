import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

    //Booking Result is passed from booking component
    @Input()
    bookingResult : any;
    
  confirmationFrm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.confirmationFrm = this.fb.group({
    })
  }

  confirmationSubmit() {
    this.confirmationFrm.markAsDirty();
  }
}
