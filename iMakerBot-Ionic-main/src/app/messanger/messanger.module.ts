import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessangerPageRoutingModule } from './messanger-routing.module';

import { MessangerPage } from './messanger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessangerPageRoutingModule
  ],
  declarations: [MessangerPage]
})
export class MessangerPageModule {}
