import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiModelAnlysisPage } from './ai-model-anlysis.page';

const routes: Routes = [
  {
    path: '',
    component: AiModelAnlysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiModelAnlysisPageRoutingModule {}
