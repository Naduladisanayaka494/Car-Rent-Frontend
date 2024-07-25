import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss'],
})
export class SearchCarComponent implements OnInit {
  isSpinning = false;
  SearchCarForm!: FormGroup;
  cars: any[] = [];
  listOfBrands: string[] = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];
  listOfType: string[] = ['SUV', 'Sedan', 'Hatchback', 'Convertible'];
  listOfTransmission: string[] = ['Automatic', 'Manual'];
  listOfColor: string[] = ['Red', 'Blue', 'Black', 'White', 'Silver'];
  constructor(private fb: FormBuilder, private service: CustomerService) {
    this.SearchCarForm = this.fb.group({
      brand: [null],
      type: [null],
      transmission: [null],
      color: [null],
    });
  }

  ngOnInit() {}

  searchCar() {
    this.isSpinning = true;
    console.log(this.SearchCarForm.value);
    this.service.searchCar(this.SearchCarForm.value).subscribe((res) => {
      this.cars = res.carDtoList.map((car: any) => {
        const processedImg = 'data:image/jpeg;base64,' + car.returnImage;
        return {
          ...car,
          processedImg: processedImg,
        };
      });
      this.isSpinning = false;
    });
  }
}
