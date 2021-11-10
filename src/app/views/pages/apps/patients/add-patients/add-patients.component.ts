import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.scss']
})
export class AddPatientsComponent implements OnInit {

  submitted = false;
  patientForm!: FormGroup;

  constructor(
    public fb: FormBuilder, 
    private router: Router,
    private ngZone: NgZone,
    private patientService: PatientService
  ) {
    this.mainForm();
   }

   mainForm(){
    this.patientForm = this.fb.group({
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
  ngOnInit(): void {
  }

  onSubmit():any{
    this.submitted = true;
    if(!this.patientForm.valid){
      return false;
    }else {
      this.patientService.createPatient(this.patientForm.value).subscribe(
        (res) =>{
          console.log('Patient successfully Created!')
        this.ngZone.run(() => this.router.navigateByUrl('/all-patients'))
        }, (error) => {
          console.log(error);
        }
      )
    }
  }

  
}

 