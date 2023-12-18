import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuilderMenuPageRoutingModule } from './builder-menu-routing.module';

import { BuilderMenuPage } from './builder-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuilderMenuPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [BuilderMenuPage]
})
export class BuilderMenuPageModule {}
