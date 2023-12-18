import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatsonPageRoutingModule } from './watson-routing.module';

import { WatsonPage } from './watson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatsonPageRoutingModule
  ],
  declarations: [WatsonPage]
})
export class WatsonPageModule {}
