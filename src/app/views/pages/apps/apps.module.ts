import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import { NgbDropdownModule, NgbTooltipModule, NgbNavModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde'

import { AppsComponent } from './apps.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { EmailComponent } from './email/email.component';
import { InboxComponent } from './email/inbox/inbox.component';
import { ReadComponent } from './email/read/read.component';
import { ComposeComponent } from './email/compose/compose.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { DoctorComponent } from './doctor/doctor.component';
import { AllDoctorComponent } from './doctor/all-doctor/all-doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';
import { DoctorScheduleComponent } from './doctor/doctor-schedule/doctor-schedule.component';
import { PatientsComponent } from './patients/patients.component';
import { AllPatientsComponent } from './patients/all-patients/all-patients.component';
import { AddPatientsComponent } from './patients/add-patients/add-patients.component';
import { ProfilePatientComponent } from './patients/profile-patient/profile-patient.component';
import { InvoiceComponent } from './patients/invoice/invoice.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
    children: [
      {
        path: '',
        redirectTo: 'calendar',
        pathMatch: 'full',
      },

      {
        path: 'doctor',
        component: DoctorComponent,
        children: [
          {
            path: '',
            redirectTo: 'alldoctor',
            pathMatch: 'full'
          },
          {
            path: 'alldoctor',
            component: AllDoctorComponent
          },
          {
            path: 'adddoctor',
            component: AddDoctorComponent
          },
          {
            path: 'doctorprofile',
            component: DoctorProfileComponent
          },
          {
            path: 'doctorschedule',
            component: DoctorScheduleComponent
          }
          
        ]
      },


       
      {
        path: 'patients',
        component: PatientsComponent,
        children: [
          {
            path: '',
            redirectTo: 'allpatients',
            pathMatch: 'full'
          },
          {
            path: 'allpatients',
            component: AllPatientsComponent
          },
          {
            path: 'addpatients',
            component: AddPatientsComponent
          },
          {
            path: 'patientsprofile',
            component: ProfilePatientComponent
          },
          {
            path: 'invoice',
            component: InvoiceComponent
          }
          
        ]
      },

      {
        path: 'email',
        component: EmailComponent,
        children: [
          {
            path: '',
            redirectTo: 'inbox',
            pathMatch: 'full'
          },
          {
            path: 'inbox',
            component: InboxComponent
          },
          {
            path: 'read',
            component: ReadComponent
          },
          {
            path: 'compose',
            component: ComposeComponent
          }
        ]
      },

     




      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
    ]
  }
]

@NgModule({
  declarations: [EmailComponent, ChatComponent, CalendarComponent, AppsComponent, InboxComponent, ReadComponent, ComposeComponent,   AllDoctorComponent ,DoctorComponent, AddDoctorComponent, DoctorProfileComponent, DoctorScheduleComponent, PatientsComponent, AllPatientsComponent, AddPatientsComponent, ProfilePatientComponent, InvoiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FullCalendarModule, // import the FullCalendar module! will make the FullCalendar component available
    PerfectScrollbarModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbCollapseModule,
    NgSelectModule,
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {}
    })
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AppsModule { }
