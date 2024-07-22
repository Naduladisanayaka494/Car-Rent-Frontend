import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

const BASE_URL = ['http://localhost:8080'];

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllCars(): Observable<any> {
    return this.http.get(BASE_URL + '/api/customer/cars', {
      headers: this.createAuthorizationHeader(),
    });
  }

  getCarById(carId: number): Observable<any> {
    return this.http.get(BASE_URL + '/api/customer/car/' + carId, {
      headers: this.createAuthorizationHeader(),
    });
  }
  bookACar(bookCarDto: any): Observable<any> {
    const url = `${BASE_URL}/api/customer/car/book`;
    return this.http.post(url, bookCarDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set('authrization', 'Bearer' + StorageService.getToken());
  }

  getBookingsByUserId(): Observable<any>{
    return this.http.get(
      BASE_URL + '/api/customer/car/bookings/' + StorageService.getUserId(),
      {
        headers: this.createAuthorizationHeader(),
      }
    );
  }
}
