/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading!: boolean;

  LoginForm!: FormGroup;

  constructor(private loginService: LoginServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const formControl ={

      email : new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),

    };
    this.LoginForm = this.formBuilder.group(formControl);
  }
  get f() { return this.LoginForm.controls;}

  Login(){
    this.loginService.Login(this.f.email.value,this.f.password.value).subscribe((result)=>{
      console.log('success');
      this.router.navigateByUrl('/channels');

    },(err)=>{
      console.log(err);


    });
  }

}
