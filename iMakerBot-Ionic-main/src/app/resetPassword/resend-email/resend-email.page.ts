/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ResetPasswordServiceService } from 'src/app/services/reset-password-service.service';

@Component({
  selector: 'app-resend-email',
  templateUrl: './resend-email.page.html',
  styleUrls: ['./resend-email.page.scss'],
})
export class ResendEmailPage implements OnInit {

  loading = false ;

  constructor(private resetService: ResetPasswordServiceService) { }

  ngOnInit() {
  }
Resend(){
  this.loading = true ;
  this.resetService.ConfirmeExistantCompte(this.resetService.CurrentEmail).subscribe(
    (result)=>{





      this.loading=false;

      console.log('true');



    },(err)=>{
      console.log(err);
      console.log('false');

      this.loading=false;

    }
  );

}


}
