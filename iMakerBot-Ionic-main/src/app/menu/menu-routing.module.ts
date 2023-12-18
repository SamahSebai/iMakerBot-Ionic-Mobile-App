import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'ai-model-anlysis',
        loadChildren: () => import('../ai-model-anlysis/ai-model-anlysis.module').then( m => m.AiModelAnlysisPageModule)
      },
      {
        path: 'ai-provider',
        loadChildren: () => import('../ai-provider/ai-provider.module').then( m => m.AiProviderPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
