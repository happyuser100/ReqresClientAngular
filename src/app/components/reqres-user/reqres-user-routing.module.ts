import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReqresUserComponent } from './reqres-user.component';

const routes: Routes = [
  { path: "", component: ReqresUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReqresUserRoutingModule { }
