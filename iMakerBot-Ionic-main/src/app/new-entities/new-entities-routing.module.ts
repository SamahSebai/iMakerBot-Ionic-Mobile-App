import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEntitiesPage } from './new-entities.page';

const routes: Routes = [
  {
    path: '',
    component: NewEntitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewEntitiesPageRoutingModule {}
