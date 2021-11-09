import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../model-doctor/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  url = 'http://localhost:4000/api/doctor/';
  
  constructor(private http: HttpClient) { }
  
  addDoctor(doctor: Doctor){
    return this.http.post(this.url, doctor);
  }

  getDoctor(id: Doctor){
    return this.http.get(`${this.url}/${id}`)
  }

  getDoctors(){
    return this.http.get(this.url);
  }
}
