import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.scss']
})
export class AddPatientsComponent implements OnInit {

  submitted = false;
  patientForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 

    this.mainForm();
  }

  ngOnInit(): void {
  }
  mainForm() {
    this.patientForm = this.fb.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    })
  }

  selectedDate: NgbDateStruct;

  onSubmit() {
    this.submitted = true;
    if (!this.patientForm.valid) {
      return false;
    } else {
      this.apiService.createPatient(this.patientForm.value).subscribe(
        (res) => {
          console.log('Patient successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/'))
        }, (error) => {
          console.log(error);
        });
    }
  }
}
