import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewIntentsPage } from './new-intents.page';

const routes: Routes = [
  {
    path: '',
    component: NewIntentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewIntentsPageRoutingModule {}
