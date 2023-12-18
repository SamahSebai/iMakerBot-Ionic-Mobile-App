import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessangerService } from '../services/messanger.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.page.html',
  styleUrls: ['./messanger.page.scss'],
})
export class MessangerPage implements OnInit {
  oldAuth=false;
  appId=false;
  isActivated=true;
  selectedId = 'overview';
  overview=true;
  configuration: any;


  constructor(private router: Router

    ) { }

  ngOnInit(): void {
  }
  load(m: any){
    this.router.navigateByUrl(m.url);

  }
  selectHandler(id){
    this.selectedId=id;
  }
  oldAuthHandler(){
    this.oldAuth=!this.oldAuth;
  }

  appIdHandler(){
    this.appId=!this.appId;
  }




  }





