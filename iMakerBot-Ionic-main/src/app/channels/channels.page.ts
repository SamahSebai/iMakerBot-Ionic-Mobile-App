import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {

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
