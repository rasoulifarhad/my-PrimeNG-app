import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Customer } from '../domain/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers() {

    return  lastValueFrom(this.http.get<any>('assets/data/customers-large.json'))
        .then((res) => <Customer[]>res.data)
        .then((data) => {
          return data;
        });
  }
}
