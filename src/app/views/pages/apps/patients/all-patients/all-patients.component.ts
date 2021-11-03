import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss']
})
export class AllPatientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
