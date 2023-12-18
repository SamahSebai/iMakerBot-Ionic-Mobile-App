import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiModelAnlysisPageRoutingModule } from './ai-model-anlysis-routing.module';

import { AiModelAnlysisPage } from './ai-model-anlysis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiModelAnlysisPageRoutingModule
  ],
  declarations: [AiModelAnlysisPage]
})
export class AiModelAnlysisPageModule {}
