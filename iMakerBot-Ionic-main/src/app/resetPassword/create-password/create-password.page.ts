/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordServiceService } from 'src/app/services/reset-password-service.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.page.html',
  styleUrls: ['./create-password.page.scss'],
})
export class CreatePasswordPage implements OnInit {

  loading!: boolean;
  token!: string;
  CreateForm!: FormGroup;

  constructor(private resertServ: ResetPasswordServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data)=>{
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this;
      this.token=data.token;
      console.log(data.token);
    });

    this.resertServ.ConfirmeToken(this.token).subscribe((result)=>{
      console.log('success');

        this.resertServ.TokenResetPassword=this.token;
    },(err)=>{

      this.router.navigateByUrl('try-again');


    });


    const formControl ={
      newPassword : new FormControl('',[Validators.required , Validators.minLength(8),Validators.maxLength(20)]),
      repeatNewPassword : new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(20)])
    };
    this.CreateForm = this.formBuilder.group(formControl);



  }
  get f() { return this.CreateForm.controls;}

  CreateNewPass(){
    this.loading=true;
    this.resertServ.ResetNewPassword(this.f.newPassword.value,this.f.repeatNewPassword.value).subscribe((result)=>
    {

      console.log('Create New Password');
      this.router.navigateByUrl('login');
      this.loading=false;


    },(err)=>{

      this.loading=false;


    });


  }

}
