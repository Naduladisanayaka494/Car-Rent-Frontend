import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin-componenet',
  templateUrl: './admin-componenet.component.html',
  styleUrls: ['./admin-componenet.component.scss'],
})
export class AdminComponenetComponent implements OnInit {
  cars: any[] = [];

  constructor(
    private adminService: AdminService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.adminService.getAllCars().subscribe((res) => {
      this.cars = res.map((car: any) => {
        const processedImg = 'data:image/jpeg;base64' + car.returnImage;
        return {
          ...car,
          processedImg: processedImg,
        };
      });
    });
  }

  onCarClick() {}

  deletecar(id: number) {
    this.adminService.deleteCar(id).subscribe((res) => {
      this.getAllCars();
      this.message.success('Car deleted successfully', { nzDuration: 5000 });
    });
  }
}
