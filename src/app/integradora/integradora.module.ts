import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { INTEGRADORAPageRoutingModule } from './integradora-routing.module';

import { INTEGRADORAPage } from './integradora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    INTEGRADORAPageRoutingModule
  ],
  declarations: [INTEGRADORAPage]
})
export class INTEGRADORAPageModule {}
