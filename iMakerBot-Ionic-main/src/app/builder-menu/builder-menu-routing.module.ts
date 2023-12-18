import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuilderMenuPage } from './builder-menu.page';

const routes: Routes = [
  {
    path: '',
    component: BuilderMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuilderMenuPageRoutingModule {}
