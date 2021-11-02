import { Component, OnInit } from '@angular/core';
import { PeoplesData } from 'src/app/core/dummy-datas/peoples.data';

@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.scss']
})
export class AllDoctorComponent implements OnInit {
  
  peoples = [];
  selectedTo = [];
  selectedCc = [];
  messageValue = "";


  constructor() { }

  ngOnInit(): void {
    this.peoples = PeoplesData.peoples;
    this.selectedTo = [this.peoples[2].id]
    this.selectedCc = [this.peoples[3].id, this.peoples[4].id, this.peoples[5].id]
  }

}
