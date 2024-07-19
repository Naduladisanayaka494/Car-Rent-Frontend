import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.scss'],
})
export class BookCarComponent implements OnInit {
  isSpinning = false;
  carId: number = this.activatedroute.snapshot.params['id'];
  car: any;
  processedImage: any;
  validateForm!: FormGroup;
  dateFormat!: 'DD-MM-YYYY';

  constructor(
    private service: CustomerService,
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      toDate: [null, Validators.required],
      fromdate: [null, Validators.required],
    });
    this.getCarById();
  }

  getCarById() {
    this.service.getCarById(this.carId).subscribe((res) => {
      this.processedImage = 'data:image/jpeg;base64,' + res.returnImage;
      this.car = res;
      console.log(res);
    });
  }

  booKACar() {
    // console.log(data);
  }
}
