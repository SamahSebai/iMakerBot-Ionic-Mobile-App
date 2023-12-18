/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterServiceService } from '../services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loading!: boolean;

  RegisterForm!: FormGroup;
  constructor(private RegisterServ: RegisterServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const formControl ={
      FullName: new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
      PhoneNumber: new FormControl('',[Validators.required]),
      companyEmployeesNumber: new FormControl('',[Validators.required])
    };
    this.RegisterForm = this.formBuilder.group(formControl);

  }
  get f() { return this.RegisterForm.controls;}
  Register(){
    this.loading=true;
    this.RegisterServ.Register(this.f.companyEmployeesNumber.value,this.f.email.value,this.f.FullName.value,this.f.password.value,this.f.PhoneNumber.value).subscribe((result)=>
    {

      console.log('Registred Succefly');
      this.router.navigateByUrl('login');
      this.loading=false;


    },(err)=>{

      this.loading=false;


    });


  }

}
