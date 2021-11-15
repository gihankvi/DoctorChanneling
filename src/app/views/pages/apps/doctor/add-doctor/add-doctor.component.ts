import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../model-doctor/doctor.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DoctorService } from '../service-doctor/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  submitted = false;
  doctorForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private doctorService: DoctorService
  ) { 

    this.mainForm();
  }

  ngOnInit(): void {
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

  createDoctor() {
    this.submitted = true;
    if (!this.doctorForm.valid) {
      return false;
    } else {
      this.doctorService.createDoctor(this.doctorForm.value).subscribe(
        (res) => {
          console.log('Doctor successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/apps/doctor/alldoctor'))
        }, (error) => {
          console.log(error);
        });
    }
    this.doctorForm.reset({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      speciality: '',
      phone: '',
      email: '',
      webUrl:'',
      address:''
    })
  }

  openFileBrowser(event: any) {
    event.preventDefault();
    let element: HTMLElement = document.querySelector("#fileUploadInputExample") as HTMLElement;
    element.click()
  }

  handleFileInput(event: any) {
    if (event.target.files.length) {
      let element: HTMLElement = document.querySelector("#fileUploadInputExample + .input-group .file-upload-info") as HTMLElement;
      let fileName = event.target.files[0].name;
      element.setAttribute( 'value', fileName)
    }
  }
}
