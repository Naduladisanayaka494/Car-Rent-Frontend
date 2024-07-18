import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.scss'],
})
export class BookCarComponent implements OnInit {
  carId: number = this.activatedroute.snapshot.params["id"];
  car: any;
  processedImage: any;

  constructor(
    private service: CustomerService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCarById();
  }

  getCarById() {
    this.service.getCarById(this.carId).subscribe((res) => {
      this.processedImage = 'data:image/jpeg;base64,' + res.returnImage;
      this.car=res
      console.log(res);
    })
  }
}
