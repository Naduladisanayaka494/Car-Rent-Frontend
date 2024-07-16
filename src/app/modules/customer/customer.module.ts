import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './componenets/customer-dashboard/customer-dashboard.component';
import { BookCarComponent } from './book-car/book-car.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BookCarComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
