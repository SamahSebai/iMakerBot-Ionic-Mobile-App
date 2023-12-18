import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordServiceService } from 'src/app/services/reset-password-service.service';

@Component({
  selector: 'app-confirme-email',
  templateUrl: './confirme-email.page.html',
  styleUrls: ['./confirme-email.page.scss'],
})
export class ConfirmeEmailPage implements OnInit {

  emailForm!: FormGroup;
  confirmeEmail=false ;
  loading!: boolean;

  constructor(private resetService: ResetPasswordServiceService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    ){

  }

  ngOnInit() {
    const formControl ={
      email : new FormControl('',[Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
    };
    this.emailForm = this.formBuilder.group(formControl);
  }


  get f() { return this.emailForm.controls;}


  send(){
    this.loading=true;
    this.resetService.ConfirmeExistantCompte(this.f.email.value).subscribe(
      (result)=>{



        this.router.navigateByUrl('resend-email');
        this.resetService.CurrentEmail=this.f.email.value;
        this.loading=false;
        this.resetService.RepeateYourPassword=true;
        console.log('true');



      },(err)=>{
        console.log(err);
        console.log('false');

        this.loading=false;

      }
    );
  }
}
