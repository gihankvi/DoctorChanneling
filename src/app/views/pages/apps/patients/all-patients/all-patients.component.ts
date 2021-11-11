import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataTable } from "simple-datatables";
import { EditPatientComponent } from '../edit-patient/edit-patient.component';
import { ProfilePatientComponent } from '../profile-patient/profile-patient.component';
import { PatientService } from '../service/patient.service';
@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss']
})
export class AllPatientsComponent implements OnInit {

  

  Patient:any = [];

  constructor(private patientService: PatientService,private dialogRef: MatDialog,) { 
    this.readPatient();
  }


  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

  readPatient(){
    this.patientService.getPatients().subscribe((data) => {
      this.Patient = data;
    })
  }

  removePatient(patient, index) {
    if(window.confirm('Are you sure?')) {
        this.patientService.deletePatient(patient._id).subscribe((data) => {
          this.Patient.splice(index, 1);
        }
      )    
    }
  }
  
  editPatient(id:String):any{
    this.dialogRef.open(EditPatientComponent,{width:'700px', data:id});
  }

  viewPatient(id:String):any{
    this.dialogRef.open(ProfilePatientComponent,{width:'700px', data:id});
  } 
  
  
  }


