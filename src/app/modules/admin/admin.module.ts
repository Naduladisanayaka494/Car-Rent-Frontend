import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponenetComponent } from './components/admin-componenet/admin-componenet.component';


@NgModule({
  declarations: [
    AdminComponenetComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
