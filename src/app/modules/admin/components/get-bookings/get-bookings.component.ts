import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrls: ['./get-bookings.component.scss'],
})
export class GetBookingsComponent implements OnInit {
  bookings: any;
  isSpinning = false;

  constructor(private adminService: AdminService,private message:NzMessageService) {}

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

  changeBookingStatus(bookingid: number, status: string) {
    this.isSpinning=true
    console.log(bookingid, status)
    this.adminService.changeBookingStatus(bookingid, status).subscribe((res) => {
      this.isSpinning = false;
      console.log(res)
      this.getBookings();
      this.message.success("Booking status changed successfully!",{nzDuration:5000})
    }, error => {
      this.message.error("Something went wrong", { nzDuration: 5000 });
    });

  }
}
