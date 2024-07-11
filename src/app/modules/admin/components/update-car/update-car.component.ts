import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss'],
})
export class UpdateCarComponent implements OnInit {
  isSpinning: boolean = false;
  updateForm!: FormGroup;
  carId = this.activatedRoute.snapshot.params['id'];
  existingImage: string | null = null;
  listOfBrands: string[] = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];
  listOfType: string[] = ['SUV', 'Sedan', 'Hatchback', 'Convertible'];
  listOfTransmission: string[] = ['Automatic', 'Manual'];
  listOfColor: string[] = ['Red', 'Blue', 'Black', 'White', 'Silver'];

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required],
    });
    this.getCarById();
  }

  getCarById() {
    this.isSpinning = true;
    this.adminService.getCarById(this.carId).subscribe((res) => {
      console.log(res);
      const CarDto = res;
      this.existingImage = 'data:image/jpeg;base64,' + res.returnImage;
         this.isSpinning = false;
      console.log(CarDto);
      console.log(this.existingImage);
      this.updateForm.patchValue(CarDto);
    });
  }
}
