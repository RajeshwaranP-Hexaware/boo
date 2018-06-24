import { Component, OnInit } from '@angular/core';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from "../landing/landing.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ZipcodeComponent } from '../zipcode/zipcode.component';
import {BussinessinformationComponent} from  '../bussinessinformation/bussinessinformation.component';
import { CoverageComponent } from '../coverage/coverage.component';
import { ComparebuyComponent } from '../comparebuy/comparebuy.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Insurance',
        component: LandingComponent,
        children: [ 
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },   
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'Discover',
            component: ZipcodeComponent,
          },
          {
            path: 'Bussiness',
            component: BussinessinformationComponent,
          },
          {
            path: 'Coverage',
            component: CoverageComponent,
          },
          {
            path: 'CompareBuy',
            component: ComparebuyComponent,
          },
    ]  
  }
])
],
  // providers: [ AuthGuardService ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
