import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.scss']
})
export class ProfilePatientComponent implements OnInit {

 
  constructor(
    
  ) { }

  ngOnInit(): void { }


}
