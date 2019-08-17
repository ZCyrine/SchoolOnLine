import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient ) { }


  getAll() {
    return this.http.get(this.baseUrl + '/teacher/findAll');
  }
  // tslint:disable-next-line:variable-name
  getDelete(_id) {
    return this.http.delete(this.baseUrl + '/teacher/delete/' + _id);
  }
}
