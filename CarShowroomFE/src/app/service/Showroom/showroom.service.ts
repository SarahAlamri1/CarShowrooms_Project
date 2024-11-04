import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../../app.constants';
import { CarShowroom, CreateCarShowroomRequests } from '../../models/car-showroom';

export interface PagingRequest {
  page: number;
  size: number;
  sortBy: string;
  ascending:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {

  constructor(private http: HttpClient) { }

  getAllShowrooms(params: PagingRequest): Observable<any> {
    let httpParams = new HttpParams()
    .set('page', params.page)
    .set('size', params.size)
    .set('sortBy', params.sortBy)
    .set('ascending', params.ascending)
    return this.http.get<any>(Endpoints.CAR_SHOWROOM, { params: httpParams });
  }

  getCarShowroom(id: number): Observable<CarShowroom> {
    return this.http.get<CarShowroom>(`${Endpoints.CAR_SHOWROOM}/${id}`);
  }

  createCarShowroom(req: CreateCarShowroomRequests): Observable<any> {
    return this.http.post<any>(Endpoints.CAR_SHOWROOM, req);
  }

  deleteCarShowroom(id: number): Observable<void> {
    return this.http.delete<void>(`${Endpoints.CAR_SHOWROOM}/${id}`);
  }

  updateCarShowroom(req:any){
    let httpParams = new HttpParams()
    .set('address', req.address)
    .set('contactNumber', req.contact_number)
    .set('ManagerName', req.manager_name)
    return this.http.put<any>(`${Endpoints.CAR_SHOWROOM}/${req.commercial_registration_number}`,undefined, { params: httpParams });

  }

}
