import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './componenets/customer-dashboard/customer-dashboard.component';
import { BookCarComponent } from './book-car/book-car.component';
import { NgZorroImportsModule } from '../../NgzorroImportsModule';
import { MyBookingsComponent } from './componenets/my-bookings/my-bookings.component';

@NgModule({
  declarations: [CustomerDashboardComponent, BookCarComponent, MyBookingsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroImportsModule,
  ],
})
export class CustomerModule {}
