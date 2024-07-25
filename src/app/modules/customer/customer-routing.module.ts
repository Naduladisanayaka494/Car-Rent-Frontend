import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './componenets/customer-dashboard/customer-dashboard.component';
import { BookCarComponent } from './book-car/book-car.component';
import { MyBookingsComponent } from './componenets/my-bookings/my-bookings.component';
import { SearchCarComponent } from '../customer/componenets/search-car/search-car.component';

const routes: Routes = [
  { path: 'dashboard', component: CustomerDashboardComponent },
  { path: 'book/:id', component: BookCarComponent },
  { path: 'my_bookings', component: MyBookingsComponent },
  { path: 'search', component: SearchCarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
