import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
const BASE_URL = ['http://localhost:8080'];
@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})
export class AdminService {
  constructor(private http: HttpClient) {}

  postcar(CarDto: any): Observable<any> {
    return this.http.post(BASE_URL + '/api/admin/car', CarDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getAllCars(): Observable<any> {
    return this.http.get(BASE_URL + '/api/admin/cars', {
      headers: this.createAuthorizationHeader(),
    });
  }

  getAllBookings(): Observable<any> {
    return this.http.get(BASE_URL + '/api/admin/car/bookings', {
      headers: this.createAuthorizationHeader(),
    });
  }

  getCarById(id: number): Observable<any> {
    return this.http.get(BASE_URL + '/api/admin/car/' + id, {
      headers: this.createAuthorizationHeader(),
    });
  }

  changeBookingStatus(bookingId: number, status: string): Observable<any> {
      return this.http.get(
        BASE_URL + `/api/admin/car/booking/${bookingId}/${status}`,
        {
          headers: this.createAuthorizationHeader(),
        }
      );
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(BASE_URL + '/api/admin/car/' + id);
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set('authrization', 'Bearer' + StorageService.getToken());
  }

  updateCar(CarId: number, carDto: any): Observable<any> {
    return this.http.put(BASE_URL + '/api/admin/car/' + CarId, carDto, {
      headers: this.createAuthorizationHeader(),
    });
  }
}
