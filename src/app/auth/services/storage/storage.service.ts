import { Injectable } from '@angular/core';

const TOKEN = "token";
const USER = "user";

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken() {
    return window.localStorage.getItem(TOKEN);
  }
  static getUser() {
    const userJson = localStorage.getItem(USER);
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  }

  static getUserRole() {
    const user = this.getUser();
    if (user === null) {
      return '';
    } else {
      return user.role;
    }
  }

  static isAdminLoggedIn(): boolean {
    if (this.getToken() == null) {
      return false;
    } else {
      const role = (String = this.getUserRole());
      return role == 'ADMIN';
    }
  }

  static isCustomerLoggedIn(): boolean {
    if (this.getToken() == null) {
      return false;
    } else {
      const role = (String = this.getUserRole());
      return role == 'CUSTOMER';
    }
  }

  static logout(): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
