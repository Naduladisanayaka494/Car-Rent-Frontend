import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageComponent, NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss'],
})
export class UpdateCarComponent implements OnInit {
  isSpinning: boolean = false;
  imagePreview!: string | ArrayBuffer | null;
  updateForm!: FormGroup;
  selectedFile: any;
  carId = this.activatedRoute.snapshot.params['id'];
  existingImage: string | null = null;
  listOfBrands: string[] = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];
  listOfType: string[] = ['SUV', 'Sedan', 'Hatchback', 'Convertible'];
  listOfTransmission: string[] = ['Automatic', 'Manual'];
  listOfColor: string[] = ['Red', 'Blue', 'Black', 'White', 'Silver'];
  imgChanged!: boolean;

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router:Router
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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.imgChanged = true;
    this.existingImage = null;
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload=()=> {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);

  }

  updateCar() {
    console.log(this.updateForm.value);
    this.isSpinning = true;
        const formData: FormData = new FormData();
    if (this.imgChanged && this.selectedFile) {
        formData.append('image', this.selectedFile);
    }


    formData.append('name', this.updateForm.get('name')!.value);
    formData.append('brand', this.updateForm.get('brand')!.value);
    formData.append('type', this.updateForm.get('type')!.value);
    formData.append('color', this.updateForm.get('color')!.value);
    formData.append(
      'transmission',
      this.updateForm.get('transmission')!.value
    );
    formData.append('price', this.updateForm.get('price')!.value);
    formData.append('description', this.updateForm.get('description')!.value);
    formData.append('year', this.updateForm.get('year')!.value);


    console.log('Form Data:', formData);

    this.adminService.updateCar(this.carId,formData).subscribe(
      (res: any) => {
        this.isSpinning = false;
          this.message.success('updated successfully', { nzDuration: 5000 });
        this.router.navigateByUrl('/admin/dashboard');
        console.log(res);

      },
      (error) => {
        this.isSpinning = false;
        this.message.error('Error while  Updating Car', { nzDuration: 5000 });

      }
    );
  }

  }

