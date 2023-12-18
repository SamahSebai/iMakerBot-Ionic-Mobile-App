import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiProviderPageRoutingModule } from './ai-provider-routing.module';

import { AiProviderPage } from './ai-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiProviderPageRoutingModule
  ],
  declarations: [AiProviderPage]
})
export class AiProviderPageModule {}
