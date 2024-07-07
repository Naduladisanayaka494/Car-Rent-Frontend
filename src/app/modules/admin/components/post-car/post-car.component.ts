import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrls: ['./post-car.component.scss'],
})
export class PostCarComponent implements OnInit {
  postCarForm: FormGroup;
  isSpinning = false;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = '';
  listOfBrands: string[] = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];
  listOfType: string[] = ['SUV', 'Sedan', 'Hatchback', 'Convertible'];
  listOfTransmission: string[] = ['Automatic', 'Manual'];
  listOfColor: string[] = ['Red', 'Blue', 'Black', 'White', 'Silver'];

  constructor(private fb: FormBuilder) {
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
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.imagePreview = null;
    }
  }

  onSubmit(): void {
    console.log(this.postCarForm.value);

    if (this.postCarForm.invalid || !this.selectedFile) {
      // Handle form validation or file selection errors
      return;
    }

    // Simulate submission logic here or send data to server
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
    formData.append('img', this.selectedFile);

    // Display formData in console to verify
    console.log('Form Data:', formData);

    // Simulate loading spinner
    this.isSpinning = true;

    // Here you would typically send formData to your backend service using HttpClient
    // Example:
    // this.yourService.postFormData(formData).subscribe(
    //   response => {
    //     console.log('Upload successful:', response);
    //     this.isSpinning = false;
    //     this.postCarForm.reset();
    //     this.selectedFile = null;
    //     this.imagePreview = null;
    //   },
    //   error => {
    //     console.error('Upload failed:', error);
    //     this.isSpinning = false;
    //   }
    // );

    // Simulate async response
    setTimeout(() => {
      this.isSpinning = false;
      this.postCarForm.reset();
      this.selectedFile = null;
      this.imagePreview = null;
    }, 2000);
  }
}
