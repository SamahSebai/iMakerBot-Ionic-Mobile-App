import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalytiquesPage } from './analytiques.page';

const routes: Routes = [
  {
    path: '',
    component: AnalytiquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalytiquesPageRoutingModule {}
