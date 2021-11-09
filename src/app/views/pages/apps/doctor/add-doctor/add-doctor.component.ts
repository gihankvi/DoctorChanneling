import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../model-doctor/doctor.model';
import { DoctorService } from '../service-doctor/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  doctors: Doctor[] | any;
  
  constructor(private doctorService: DoctorService,
              private doctorRouter: Router ) { }

              doctorForm = new FormGroup({
                firstName: new FormControl(
                  '',[Validators.required]
                ),
                lastName: new FormControl(
                  '',[Validators.required]
                )
    });
  
    createDoctor(){
      this.doctorService.addDoctor(this.doctorForm.value).subscribe(()=>{
  
      }, (err) => {
        console.log(err);
      });
  
      this.doctorForm.reset({
        firstName: '',
        lastName: ''
      })
    }
    
  ngOnInit(): void {
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
