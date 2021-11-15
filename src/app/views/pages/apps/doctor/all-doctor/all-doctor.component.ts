import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DoctorService } from '../service-doctor/doctor.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from '../model-doctor/doctor.model';

import { DataTable } from "simple-datatables";

@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.scss']
})
export class AllDoctorComponent implements OnInit {

  Doctor:any = [];
  submitted = false;

  doctorForm: FormGroup;

  constructor(private doctorService: DoctorService,
              private modalService: NgbModal,
              public fb: FormBuilder,
              private router: Router,
              private ngZone: NgZone,) { 
    this.mainForm();
    this.ngOnInit();
  }

  
  mainForm() {
    this.doctorForm = this.fb.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
      phone:['', [Validators.required]],
      email:['', [Validators.required]],
      webUrl:['', [Validators.required]],
      address:['', [Validators.required]],
    })
  }

  selectedDate: NgbDateStruct;

  ngOnInit(): void {
    //const dataTable = new DataTable("#dataTableExample");
      this.doctorService.getDoctors().subscribe((data) => {
       this.Doctor = data;
      })    

  }
//--------------------------Doctor Delete----------------------------------------------
  removeDoctor(id: any){
    if(confirm('Do want to delete this Doctor?')){
 
     this.doctorService.deleteDoctor(id).subscribe(
       (res) => {
         console.log('Deleted Successfully');
         this.ngOnInit();
         },
         (err)=>{
          console.log(err);
         }
     )}
  }
//-------------------------Doctor view popup---------------------------------------------
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

//-------------------------Doctor view values-------------------------------------------
getDoctorValue(id: any):any {
  this.doctorService.getDoctor(id).subscribe((data: Doctor[] | any) => {
    this.doctorForm.setValue({
      firstName: data['firstName'],
      lastName: data['lastName'],
      dob: data['dob'],
      gender: data['gender'],
      speciality: data['speciality'],
      phone: data['phone'],
      email: data['email'],
      webUrl: data['webUrl'],
      address: data['address'],
    });
  });
  this.doctorForm.reset({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    speciality: '',
    phone: '',
    email: '',
    webUrl: '',
    address: ''
  });
} 


}
