import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.scss'],
})
export class BookCarComponent implements OnInit {
  isSpinning = false;
  carId: number;
  car: any;
  processedImage: any;
  validateForm!: FormGroup;
  dateFormat: string = 'DD-MM-YYYY';

  constructor(
    private service: CustomerService,
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router:Router
  ) {
    this.carId = this.activatedroute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      toDate: [null, Validators.required],
      fromDate: [null, Validators.required],
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
    if (this.validateForm.valid) {
      this.isSpinning = true;
      let bookACarDto = {
        toDate: this.validateForm.value.toDate,
        fromDate: this.validateForm.value.fromDate,
        userId: StorageService.getUserId(),
        carId: this.carId,
      };
      this.service.bookACar(bookACarDto).subscribe(
        (res) => {
          console.log(res);
          this.isSpinning = false;
          this.message.success("Booking A Request Succeed", { nzDuration: 5000 });
          this.router.navigateByUrl("/customer/dashboard");
        },
        (error) => {
          console.error(error);
          this.isSpinning = false;
          this.message.error("Something went wrong",{nzDuration:5000})
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
