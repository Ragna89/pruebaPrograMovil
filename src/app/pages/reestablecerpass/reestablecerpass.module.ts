import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestablecerpassPageRoutingModule } from './reestablecerpass-routing.module';

import { ReestablecerpassPage } from './reestablecerpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecerpassPageRoutingModule
  ],
  declarations: [ReestablecerpassPage]
})
export class ReestablecerpassPageModule {}
