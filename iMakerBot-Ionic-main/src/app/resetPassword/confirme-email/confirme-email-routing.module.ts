import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmeEmailPage } from './confirme-email.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmeEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class ConfirmeEmailPageRoutingModule {}
