import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent implements OnInit {
  carId = this.activatedRoute.snapshot.params["id"];

  constructor(private adminService:AdminService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getCarById();
  }

  getCarById() {
    this.adminService.getCarById(this.carId).subscribe((res) => {
      console.log(res);
    })
  }

}
