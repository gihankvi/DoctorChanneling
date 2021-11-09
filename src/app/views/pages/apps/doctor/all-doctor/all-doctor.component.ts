import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service-doctor/doctor.service';

@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.scss']
})
export class AllDoctorComponent implements OnInit {
// Employee:any = [];
//users: User[] | any;
  Doctor:any = [];

  constructor(private doctorService: DoctorService) { 
    this.readDoctor();
  }

  ngOnInit(): void {
  }

  readDoctor(){
    this.doctorService.getDoctors().subscribe((data) => {
     this.Doctor = data;
    })    
  }

  removeDoctor(doctor, index) {
    if(window.confirm('Are you sure?')) {
        this.doctorService.deleteDoctor(doctor._id).subscribe((data) => {
          this.Doctor.splice(index, 1);
        }
      )    
    }
  }
}
