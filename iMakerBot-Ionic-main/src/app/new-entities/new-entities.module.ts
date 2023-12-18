import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewEntitiesPageRoutingModule } from './new-entities-routing.module';

import { NewEntitiesPage } from './new-entities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewEntitiesPageRoutingModule
  ],
  declarations: [NewEntitiesPage]
})
export class NewEntitiesPageModule {}
