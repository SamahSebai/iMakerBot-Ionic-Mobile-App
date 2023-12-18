import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateChatbotPageRoutingModule } from './create-chatbot-routing.module';

import { CreateChatbotPage } from './create-chatbot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateChatbotPageRoutingModule
  ],
  declarations: [CreateChatbotPage]
})
export class CreateChatbotPageModule {}
