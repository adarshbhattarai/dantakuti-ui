import { Component } from '@angular/core';
import { NbLoginComponent,NbAuthResult } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent{

  user: any = {};
  
  login(){

    
    console.log(this.user)

    this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;

      console.log(result);
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }
      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl('pages');
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });

  }
}
