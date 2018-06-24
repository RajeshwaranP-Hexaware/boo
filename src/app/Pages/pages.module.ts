import { CommonModule } from "@angular/common"; 
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Router,Routes} from  '@angular/router';
import { Http, BaseRequestOptions,HttpModule } from '@angular/http';
import {HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { RoutingModule } from "./routing/routing.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsuranceheadingComponent } from './header/insuranceheading/insuranceheading.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { DashboardfooterComponent } from './dashboardfooter/dashboardfooter.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { PagelinkComponent } from './pagelink/pagelink.component';
import { LeftsidepageheaderComponent } from './leftsidepageheader/leftsidepageheader.component';
import { BussinessinformationComponent } from './bussinessinformation/bussinessinformation.component';
import { UpdateFilterService } from "../Services/FilterMessage";
import { BussinessfooterComponent } from './bussinessfooter/bussinessfooter.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { CoverageComponent } from './coverage/coverage.component';
import { CoveragefooterComponent } from './coveragefooter/coveragefooter.component';
import { ComparebuyComponent } from './comparebuy/comparebuy.component';
import { FootercomparebuyComponent } from './footercomparebuy/footercomparebuy.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { SafteUrlPipe } from '../Pipes/safte-url.pipe';


export const routes: Routes = [
  {  path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent},  
  { path: '**', component: LoginComponent },   
];

@NgModule({
  declarations: [       
  LoginComponent, LandingComponent, DashboardComponent, InsuranceheadingComponent, ZipcodeComponent, 
  DashboardfooterComponent, ProgressbarComponent, PagelinkComponent, LeftsidepageheaderComponent, BussinessinformationComponent, BussinessfooterComponent, CoverageComponent, CoveragefooterComponent, ComparebuyComponent, FootercomparebuyComponent, ChatBotComponent,    SafteUrlPipe],
  imports: [
     FormsModule, CommonModule ,RoutingModule,HttpModule,BrowserModule,BrowserAnimationsModule,    
     RouterModule.forRoot(routes, {useHash: true}),     
     ReactiveFormsModule,
     NgDatepickerModule
     
    
  ],
  providers: [CookieService,DatePipe,UpdateFilterService],
  exports: [RouterModule]
  
})
export class PagesModule { }