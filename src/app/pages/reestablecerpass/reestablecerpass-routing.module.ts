import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReestablecerpassPage } from './reestablecerpass.page';

const routes: Routes = [
  {
    path: '',
    component: ReestablecerpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReestablecerpassPageRoutingModule {}
