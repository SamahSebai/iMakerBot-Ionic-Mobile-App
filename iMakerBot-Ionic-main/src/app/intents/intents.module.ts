import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntentsPageRoutingModule } from './intents-routing.module';

import { IntentsPage } from './intents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntentsPageRoutingModule
  ],
  declarations: [IntentsPage]
})
export class IntentsPageModule {}
