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

  viewprofileForm: FormGroup;
  patientData: Patient[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private patientService: PatientService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public id: string
  ) { }

  ngOnInit(): void {
    this.getPatient(this.id);
    this. viewprofileForm = this.fb.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required, ]],
      date:[''],
      time:[''],
      address:[''],
      age:[''],
      gender:[''],
      email:[''],
      contactNumber:['']
    })
  }

  //getter to access from control
  get myForm(){
    return this.viewprofileForm.controls;
  }

  // get patients
  getPatient(id) {
    this.patientService.getPatient(id).subscribe(data => {
      this. viewprofileForm.setValue({
        name: data['name'],
        firstName:data['firstname'],
        lastName:data['lastName'],
        date:data['date'],
        time:data['time'],
        address:data['address'],
        age:data['age'],
        gender:data['gender'],
        email:data['email'],
        contactNumber:data['contactNumber']
      });
    });
  }

  onSubmit():any{
    window.location.reload();
  }

}
