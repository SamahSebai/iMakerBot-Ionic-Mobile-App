import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateChatbotPage } from './create-chatbot.page';

const routes: Routes = [
  {
    path: '',
    component: CreateChatbotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateChatbotPageRoutingModule {}
