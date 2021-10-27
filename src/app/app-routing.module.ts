import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'reqres', pathMatch: 'full' },
  {
    path: 'reqres',
    loadChildren: () => import('./components/reqres-user/reqres-user.module').then(m => m.ReqresUserModule),
    runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
