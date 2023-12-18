import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewIntentsPageRoutingModule } from './new-intents-routing.module';

import { NewIntentsPage } from './new-intents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewIntentsPageRoutingModule
  ],
  declarations: [NewIntentsPage]
})
export class NewIntentsPageModule {}
