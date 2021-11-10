import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service-doctor/doctor.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.scss']
})
export class AllDoctorComponent implements OnInit {
// Employee:any = [];
//users: User[] | any;
  Doctor:any = [];

  constructor(private doctorService: DoctorService,
              private modalService: NgbModal) { 
    this.readDoctor();
  }

  ngOnInit(): void {
  }

  readDoctor(){
    this.doctorService.getDoctors().subscribe((data) => {
     this.Doctor = data;
    })    
  }

  removeDoctor(doctor:any, index:any) {
    if(window.confirm('Are you sure?')) {
        this.doctorService.deleteDoctor(doctor._id).subscribe((data) => {
          this.Doctor.splice(index, 1);
        }
      )    
    }
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
