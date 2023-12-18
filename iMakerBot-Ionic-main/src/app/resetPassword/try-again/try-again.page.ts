import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordServiceService } from 'src/app/services/reset-password-service.service';

@Component({
  selector: 'app-try-again',
  templateUrl: './try-again.page.html',
  styleUrls: ['./try-again.page.scss'],
})
export class TryAgainPage implements OnInit {

  constructor(private resetSer: ResetPasswordServiceService,
    private router: Router) { }

  ngOnInit() {
  }
  again(){
    this.resetSer.CurrentEmail='';
    this.router.navigateByUrl('confirme-email');


  }

}
