import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})
export class MyBookingsComponent implements OnInit {
  bookings: any;
  isSpinning = false;
  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.getMyBookings();
  }

  getMyBookings() {
    this.service.getBookingsByUserId().subscribe((res) => {
      this.isSpinning=true
      this.bookings = res;
      console.log(res);
      this.isSpinning = false;
    });
  }
}
