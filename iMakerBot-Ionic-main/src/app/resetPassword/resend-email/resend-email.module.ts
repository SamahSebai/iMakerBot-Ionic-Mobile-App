import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResendEmailPageRoutingModule } from './resend-email-routing.module';

import { ResendEmailPage } from './resend-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResendEmailPageRoutingModule
  ],
  declarations: [ResendEmailPage]
})
export class ResendEmailPageModule {}
