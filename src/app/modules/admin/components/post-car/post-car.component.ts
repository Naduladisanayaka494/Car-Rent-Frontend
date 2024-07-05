import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrls: ['./post-car.component.scss'],
})
export class PostCarComponent implements OnInit {
  isSpinning = false;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = '';
  listofBrands: string[] = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];
  listOfType: string[] = ['SUV', 'Sedan', 'Hatchback', 'Convertible'];
  listOfTransmission: string[] = ['Automatic', 'Manual'];
  listOfColor: string[] = ['Red', 'Blue', 'Black', 'White', 'Silver'];
  listOfBrands: string[] = ['Red', 'Blue', 'Black', 'White', 'Silver'];
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    this.isSpinning = true;
    // Handle form submission logic here, e.g., send data to a server
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      this.isSpinning = false;
      // Reset form or handle successful submission
    }, 2000);
  }

  constructor() {}

  ngOnInit(): void {}
}
