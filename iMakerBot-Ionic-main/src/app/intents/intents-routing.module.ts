import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntentsPage } from './intents.page';

const routes: Routes = [
  {
    path: '',
    component: IntentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntentsPageRoutingModule {}
