import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CreatePasswordPage } from './create-password.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class CreatePasswordPageRoutingModule {}
