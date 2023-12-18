import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalytiquesPageRoutingModule } from './analytiques-routing.module';

import { AnalytiquesPage } from './analytiques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalytiquesPageRoutingModule
  ],
  declarations: [AnalytiquesPage]
})
export class AnalytiquesPageModule {}
