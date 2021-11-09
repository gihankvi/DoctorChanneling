import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
import { PatientService } from '../service/patient.service';
@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss']
})
export class AllPatientsComponent implements OnInit {

  

  Patient:any = [];
  constructor(private patientService: PatientService) { 
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

}
