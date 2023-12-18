import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatsonPage } from './watson.page';

const routes: Routes = [
  {
    path: '',
    component: WatsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatsonPageRoutingModule {}
