import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessangerPage } from './messanger.page';

const routes: Routes = [
  {
    path: '',
    component: MessangerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessangerPageRoutingModule {}
