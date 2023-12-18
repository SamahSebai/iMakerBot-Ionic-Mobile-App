import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsgChartPage } from './msg-chart.page';

const routes: Routes = [
  {
    path: '',
    component: MsgChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsgChartPageRoutingModule {}
