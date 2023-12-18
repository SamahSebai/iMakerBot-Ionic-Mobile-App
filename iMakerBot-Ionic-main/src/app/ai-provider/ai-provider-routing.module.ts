import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiProviderPage } from './ai-provider.page';

const routes: Routes = [
  {
    path: '',
    component: AiProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiProviderPageRoutingModule {}
