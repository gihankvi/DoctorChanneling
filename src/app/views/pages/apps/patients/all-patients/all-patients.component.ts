import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';
@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss']
})
export class AllPatientsComponent implements OnInit {
  
  Patient:any = [];
  submitted = false;

  patientForm: FormGroup;

  constructor(private patientService: PatientService,
    private modalService: NgbModal,
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,) { 
  this.mainForm();
  this.ngOnInit();
}

  
  mainForm() {
    this.patientForm = this.fb.group({

      firstName:['', [Validators.required]],
      lastName:[''],
      date:[''],
      time:[''],
      address:[''],
      age:[''],
      gender:[''],
      email:[''],
      contactNumber:[''],
      
    })
  }

  selectedDate: NgbDateStruct;

  ngOnInit(): void {
    //const dataTable = new DataTable("#dataTableExample");
      this.patientService.getPatients().subscribe((data) => {
       this.Patient = data;
      })    

  }
//--------------------------Doctor Delete----------------------------------------------
  removePatient(id: any){
    if(confirm('Do want to delete this Patient?')){
 
     this.patientService.deletePatient(id).subscribe(
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
getPatientValue(id: any):any {
  this.patientService.getPatient(id).subscribe((data: Patient[] | any) => {
    this.patientForm.setValue({
      firstName: data['firstName'],
      lastName: data['lastName'],
      date:data['date'],
      time:data['time'],
      address:data['address'],
      age:data['age'],
      gender:data['gender'],
      email:data['email'],
      contactNumber:data['contactNumber'],
      //description:data['description'],

    });
  });
  
} 


}



