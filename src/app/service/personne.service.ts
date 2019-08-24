import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient ) { }


  AllTeacher() {
    return this.http.get(this.baseUrl + '/teacher/findAll');
  }
  // tslint:disable-next-line:variable-name
  DeleteTeacher(_id) {
    return this.http.delete(this.baseUrl + '/teacher/delete/' + _id);
  }

  AddTeacher(Teacher) {
    return this.http.post(this.baseUrl + '/teacher/create' , Teacher);
  }
  // tslint:disable-next-line:variable-name
  updateTeacher(_id, Teacher) {
    return this.http.put(this.baseUrl + '/teacher/update/' + _id, Teacher);
  }

}
