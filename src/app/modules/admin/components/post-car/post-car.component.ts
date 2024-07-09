import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrls: ['./post-car.component.scss'],
})
export class PostCarComponent implements OnInit {
  postCarForm: FormGroup;
  isSpinning:boolean = false;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null; // Ensure this is null initially
  listOfBrands: string[] = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];
  listOfType: string[] = ['SUV', 'Sedan', 'Hatchback', 'Convertible'];
  listOfTransmission: string[] = ['Automatic', 'Manual'];
  listOfColor: string[] = ['Red', 'Blue', 'Black', 'White', 'Silver'];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private message: NzMessageService,
    private router: Router
  ) {
    // Initialize the form in the constructor
    this.postCarForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] || null;
    this.previewImage();
  }

  previewImage(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.imagePreview = null;
    }
  }

  onSubmit(): void {
    console.log(this.postCarForm.value);
    this.isSpinning = true;
    if (this.postCarForm.invalid || !this.selectedFile) {
      this.isSpinning = false;
      return;
    }

    const formData: FormData = new FormData();
    formData.append('name', this.postCarForm.get('name')!.value);
    formData.append('brand', this.postCarForm.get('brand')!.value);
    formData.append('type', this.postCarForm.get('type')!.value);
    formData.append('color', this.postCarForm.get('color')!.value);
    formData.append(
      'transmission',
      this.postCarForm.get('transmission')!.value
    );
    formData.append('price', this.postCarForm.get('price')!.value);
    formData.append('description', this.postCarForm.get('description')!.value);
    formData.append('year', this.postCarForm.get('year')!.value);
    formData.append('image', this.selectedFile);

    console.log('Form Data:', formData);

    this.adminService.postcar(formData).subscribe(
      (res: any) => {
        this.isSpinning = false;
          this.message.success('Signup successful', { nzDuration: 5000 });
        this.router.navigateByUrl('/admin/dashboard');
        console.log(res);

      },
      (error) => {
        this.isSpinning = false;
        this.message.error('Error while posting Car', { nzDuration: 5000 });

      }
    );
  }
}
