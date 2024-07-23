import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrls: ['./get-bookings.component.scss'],
})
export class GetBookingsComponent implements OnInit {
  bookings: any;
  isSpinning = false;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.isSpinning = true;
    this.adminService.getAllBookings().subscribe((res) => {
      console.log(res);
      this.bookings = res;
          this.isSpinning = false;

    });
  }
}
