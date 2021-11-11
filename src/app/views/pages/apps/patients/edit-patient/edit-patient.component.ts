import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  submitted = false;
  editpatientForm: FormGroup;
  patientData: Patient[];
 // EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private patientService: PatientService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public id: string
  ) {}

  ngOnInit() {
    this.updatePatient();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getPatient(id);
    this. editpatientForm = this.fb.group({
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

 

  // Getter to access form control
  get myForm() {
    return this. editpatientForm.controls;
  }

  getPatient(id) {
    this.patientService.getPatient(id).subscribe(data => {
      this. editpatientForm.setValue({
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

  updatePatient() {
    this.editpatientForm = this.fb.group({
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

  // onSubmit() {
  //   this.submitted = true;
  //   if (!this.editpatientForm.valid) {
  //     return false;
  //   } else {
  //     if (window.confirm('Are you sure?')) {
  //       let id = this.actRoute.snapshot.paramMap.get('id');
  //       this.patientService.updatePatient(id, this.editpatientForm.value)
  //         .subscribe(res => {
  //           this.router.navigateByUrl('/edit-patient');
  //           console.log('Content updated successfully!')
  //         }, (error) => {
  //           console.log(error)
  //         })
  //     }
  //   }
  // }

   onSubmit():any {
    this.submitted = true;
    if(!this.editpatientForm.valid){
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        this.patientService.updatePatient(this.id, this.editpatientForm.value).subscribe(res => {
          window.location.reload();
          console.log('Content updated successfully')
        }, (error) => {
          console.log(error)
        })
      }
    }
  }


}


