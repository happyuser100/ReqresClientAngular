import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReqresUserRoutingModule } from './reqres-user-routing.module';
import { ReqresUserService } from 'src/app/services/reqres-user.service';
import { MaterialModuleModule } from 'src/app/modules/material-module/material-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReqresUserRoutingModule,
    MaterialModuleModule
  ],
  providers: [ReqresUserService],
})
export class ReqresUserModule { }
