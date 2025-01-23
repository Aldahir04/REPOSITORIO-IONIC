import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { INTEGRADORAPage } from './integradora.page';

const routes: Routes = [
  {
    path: '',
    component: INTEGRADORAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class INTEGRADORAPageRoutingModule {}
