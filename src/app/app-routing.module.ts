import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'' , pathMatch : 'full', redirectTo : 'taxes'
  },
  {
    path : 'taxes',
    loadChildren : () => import('./taxes/taxes.module').then( m => m.TaxesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
