import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-componenet',
  templateUrl: './admin-componenet.component.html',
  styleUrls: ['./admin-componenet.component.scss'],
})
export class AdminComponenetComponent implements OnInit {
  cars: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.adminService.getAllCars().subscribe((res) => {
      console.log(res);
      this.cars = res.map((car: any) => {
        return {
          id: car.id,
          brand: car.brand,
          color: car.color,
          name: car.name,
          type: car.type,
          transmission: car.transmission,
          description: car.description,
          price: car.price,
          year: car.year,
          processedImg: car.returnImage
            ? `data:image/jpeg;base64,${car.returnImage}`
            : 'default-image-url',
        };
      });
    });
  }

  onCarClick() {}
}
