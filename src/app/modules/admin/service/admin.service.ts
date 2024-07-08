import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
const BASE_URL = ['http://localhost:8080'];
@Injectable({
  providedIn: 'root' // This makes the service available application-wide
})


export class AdminService {

  constructor(private http: HttpClient) { }

  postcar(CarDto: any): Observable<any>{
    return this.http.post(BASE_URL + "/api/admin/car", CarDto,{
      headers: this.createAuthorizationHeader()
    });

  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set("authrization","Bearer"+StorageService.getToken())

  }
}
