import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'confirme-email',
    loadChildren: () => import('./resetPassword/confirme-email/confirme-email.module').then( m => m.ConfirmeEmailPageModule)
  },
  {
    path: 'resend-email',
    loadChildren: () => import('./resetPassword/resend-email/resend-email.module').then( m => m.ResendEmailPageModule)
  },
  {
    path: 'CreateNewPassword',
    loadChildren: () => import('./resetPassword/create-password/create-password.module').then( m => m.CreatePasswordPageModule)
  },
  {
    path: 'try-again',
    loadChildren: () => import('./resetPassword/try-again/try-again.module').then( m => m.TryAgainPageModule)
  },
  {
    path: 'ai-provider',
    loadChildren: () => import('./ai-provider/ai-provider.module').then( m => m.AiProviderPageModule)
  },
  {
    path: 'channels',
    loadChildren: () => import('./channels/channels.module').then( m => m.ChannelsPageModule)
  },
  {
    path: 'ai-model-anlysis',
    loadChildren: () => import('./ai-model-anlysis/ai-model-anlysis.module').then( m => m.AiModelAnlysisPageModule)
  },
  {
    path: 'create-chatbot',
    loadChildren: () => import('./create-chatbot/create-chatbot.module').then( m => m.CreateChatbotPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./application/application.module').then( m => m.ApplicationPageModule)
  },
  {
    path: 'watson',
    loadChildren: () => import('./watson/watson.module').then( m => m.WatsonPageModule)
  },
  {
    path: 'intents',
    loadChildren: () => import('./intents/intents.module').then( m => m.IntentsPageModule)
  },
  {
    path: 'new-intents',
    loadChildren: () => import('./new-intents/new-intents.module').then( m => m.NewIntentsPageModule)
  },
  {
    path: 'entities',
    loadChildren: () => import('./entities/entities.module').then( m => m.EntitiesPageModule)
  },
  {
    path: 'new-entities',
    loadChildren: () => import('./new-entities/new-entities.module').then( m => m.NewEntitiesPageModule)
  },
  {
    path: 'analytiques',
    loadChildren: () => import('./analytiques/analytiques.module').then( m => m.AnalytiquesPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'msg-chart',
    loadChildren: () => import('./msg-chart/msg-chart.module').then( m => m.MsgChartPageModule)
  },
  {
    path: 'ex',
    loadChildren: () => import('./ex/ex.module').then( m => m.ExPageModule)
  },  {
    path: 'messanger',
    loadChildren: () => import('./messanger/messanger.module').then( m => m.MessangerPageModule)
  },
  {
    path: 'builder-menu',
    loadChildren: () => import('./builder-menu/builder-menu.module').then( m => m.BuilderMenuPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
