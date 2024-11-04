import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../../app.constants';
import { PagingRequest } from '../Showroom/showroom.service';
import { AddCarRequests } from '../../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  createCar(req: AddCarRequests): Observable<any> {
  return this.http.post<any>(Endpoints.CAR, req);
  }

  getAllSCars(params: PagingRequest): Observable<any> {
    let httpParams = new HttpParams()
    .set('page', params.page)
    .set('size', params.size)
    .set('sortBy', params.sortBy)
    .set('ascending', params.ascending)
    return this.http.get<any>(Endpoints.CAR, { params: httpParams });
  }
}
