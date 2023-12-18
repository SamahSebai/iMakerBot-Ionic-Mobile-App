/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-provider',
  templateUrl: './ai-provider.page.html',
  styleUrls: ['./ai-provider.page.scss'],
})
export class AiProviderPage implements OnInit {

  MenuBtn1=false;
MenuBtn2=false;

  constructor() { }

  ngOnInit() {
  }
  menu(){
    this.MenuBtn1=true;
    this.MenuBtn2=false;
  }
  close(){
    this.MenuBtn1=false;
  }
  open2(){
    this.MenuBtn2=true;

  }
  close2(){
    this.MenuBtn2=false;

  }

}
