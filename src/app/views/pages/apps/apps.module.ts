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
import { AllDoctorComponent } from './doctor/all-doctor/all-doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { AllPatientComponent } from './patient/all-patient/all-patient.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { DoctorScheduleComponent } from './doctor/doctor-schedule/doctor-schedule.component';
import { PatientInvoiceComponent } from './patient/patient-invoice/patient-invoice.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';

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
        path: 'doctor',
        component: DoctorComponent,
        children: [
          {
            path: '',
            redirectTo: 'allDoctor',
            pathMatch: 'full'
          },
          {
            path: 'allDoctor',
            component: AllDoctorComponent
          },
          {
            path: 'addDoctor',
            component: AddDoctorComponent
          },
          {
            path: 'doctorProfile',
            component: DoctorProfileComponent
          },
          {
            path: 'doctorSchedule',
            component: DoctorScheduleComponent
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
  declarations: [EmailComponent, ChatComponent, CalendarComponent, AppsComponent, InboxComponent, ReadComponent, ComposeComponent, AllDoctorComponent, AddDoctorComponent,   AllPatientComponent, AddPatientComponent, PatientProfileComponent, DoctorScheduleComponent, PatientInvoiceComponent, DoctorComponent, DoctorProfileComponent],
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
