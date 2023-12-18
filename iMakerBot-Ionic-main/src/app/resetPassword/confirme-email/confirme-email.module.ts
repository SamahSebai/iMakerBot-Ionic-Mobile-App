import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmeEmailPageRoutingModule } from './confirme-email-routing.module';

import { ConfirmeEmailPage } from './confirme-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmeEmailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConfirmeEmailPage]
})
export class ConfirmeEmailPageModule {}
