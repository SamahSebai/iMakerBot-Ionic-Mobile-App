import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MsgChartPageRoutingModule } from './msg-chart-routing.module';
import { MsgChartPage } from './msg-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsgChartPageRoutingModule
  ],
  declarations: [MsgChartPage]
})
export class MsgChartPageModule {}
