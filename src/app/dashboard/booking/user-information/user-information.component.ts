import { Component, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceData } from '../../../@core/data/sewa';

@Component({
  selector: 'ngx-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent{

  @Output() userformSubmit = new EventEmitter();
  
  userInfoForm: FormGroup;
  radioGroupValue = 'M';
  dantasewa : any[];
  constructor(private fb: FormBuilder,private sewaService : ServiceData ) {

    this.sewaService.getServices().subscribe( (services) =>{
      this.dantasewa = services;
      // this.dantasewa.push(
      //   {name: "Not sure yet",shortDesc: "Need some counselling and CheckUp" , description: "Need some counselling and CheckUp"}
      // )
    });

    this.userInfoForm = this.fb.group({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      phoneNumber : new FormControl(),
      address : new FormControl('', Validators.required),
      emailSubscription : new FormControl(false),
      gender : new FormControl('F'),
      checkUps : new FormControl(),
      additionalDetails : new FormControl()
    });
    //this.stepper.selectedIndex = 1 ;
  }

  onUserFormSubmit() {
 
    this.userInfoForm.markAsDirty();
    this.userformSubmit.emit(this.userInfoForm.value);
  }
}
