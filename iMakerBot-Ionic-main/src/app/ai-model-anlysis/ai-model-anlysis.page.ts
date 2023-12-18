import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-model-anlysis',
  templateUrl: './ai-model-anlysis.page.html',
  styleUrls: ['./ai-model-anlysis.page.scss'],
})
export class AiModelAnlysisPage implements OnInit {

  menuBtn1=false;
  menuBtn2=false;

  constructor() { }

  ngOnInit() {
  }
  menu(){
    this.menuBtn1=true;
    this.menuBtn2=false;
  }
  close(){
    this.menuBtn1=false;
  }
  open2(){
    this.menuBtn2=true;

  }
  close2(){
    this.menuBtn2=false;

  }

}
