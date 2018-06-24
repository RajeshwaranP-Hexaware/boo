import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { DiscoverService } from "../../Services/discover.service";
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DashboardfooterComponent } from '../dashboardfooter/dashboardfooter.component';
import { IndividualInsurance } from '../../Models/individual-insurance';
import { UpdateFilterService } from '../../Services/FilterMessage';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css'],
  providers: [DiscoverService]
})
export class ZipcodeComponent implements OnInit {


  IndividualInsurance: IndividualInsurance;
  details: any;
  clientLocationAndDetailsActive: boolean = false;
  houseNumber: any;
  address1: any;
  address2: any;
  state: any;
  city: any;
  businessName: any;
  dba: any;
  dunsnumber: any;
  zipCode: any;
  errorCheck: boolean = false;
  orderNo: string = "1";
  currentzipcode: string = "";
  blnhomebase: boolean = false;
  blnwrongzipcode:boolean = false;

  ZipCodeForm = new FormGroup({
    'zipCode': new FormControl("", Validators.required)
  });

  ClientDetailsLocationForm = new FormGroup({
    'businessName': new FormControl("", ),
    'dba': new FormControl("", ),
    'houseNumber': new FormControl("", ),
    'address1': new FormControl("", ),
    'address2': new FormControl("", ),
    'city': new FormControl("", ),
    'state': new FormControl("", )
  });


  constructor(private titledata: Title,private router: Router, private _discoverService: DiscoverService,private filterService: UpdateFilterService) {
    titledata.setTitle("Insurance Discover"); 
   }

  ngOnInit() {
    
    this.filterService.sendMessage("Discover");
    this.details = "";
    this.ZipCodeForm.controls['zipCode'].markAsUntouched();
    this.ZipCodeForm.controls['zipCode'].markAsPristine();
    this.zipCode = "";
    this.filterService.sendMessage("0");

    this.IndividualInsurance = {
      address1: "",
      address2: "",
      businessName: "",
      city: "",
      dba: "",
      dunsnumber: "",
      houseNumber: "",
      state: "",
      zipcode: ""
    }
    this.UpdateZipCodedetailsdata();
  }

  ngAfterViewInit(){
      this.UpdateZipCodedetailsdata();
  }

  UpdateZipCodedetailsdata(){
    var insurancedetails = JSON.parse(localStorage.getItem("insurancedetails"));         
    if(insurancedetails != null){
    this.IndividualInsurance.address1 = insurancedetails.address1;
    this.IndividualInsurance.address2 = insurancedetails.address2;
    this.IndividualInsurance.businessName = insurancedetails.businessName;
    this.IndividualInsurance.city = insurancedetails.city;
    this.IndividualInsurance.dba = insurancedetails.dba;
    this.IndividualInsurance.dunsnumber = insurancedetails.dunsnumber;
    this.IndividualInsurance.houseNumber = insurancedetails.houseNumber;
    this.IndividualInsurance.state = insurancedetails.state;
    this.clientLocationAndDetailsActive = true;
    this.filterService.sendMessage("2");  
    this.orderNo = "2";
    }
    else{
      this.filterService.sendMessage("0"); 
      this.clientLocationAndDetailsActive = false;
    }
  }

  ClientDetailsLocationFormSubmit() {
    // console.log(this.ClientDetailsLocationForm.value);
  }
  ZipCodeSubmit() {
    this.getClientDetailsAndLocationInfo();
  }

  getClientDetailsAndLocationInfo() {

    //   this.ZipCodeForm.controls['zipCode'].markAsDirty();
    //   this.ZipCodeForm.controls['zipCode'].markAsTouched();



    let zipcode = ({
      "zipcode": this.zipCode //"72206"
    });
    // console.log(zipcode);



    // if(this.zipCode === '72206' && this.zipCode.trim().length >  0){
    if (this.zipCode.trim().length > 0) {
      debugger;
      this._discoverService.GetClientDetailsLocation(zipcode).subscribe(        
        data => {          
          this.clientLocationAndDetailsActive = true;
         
          this.details = JSON.parse(data._body);

          this.IndividualInsurance.address1 = this.details.address1;
          this.IndividualInsurance.address2 = this.details.address2;
          this.IndividualInsurance.businessName = this.details.buisnessname;
          this.IndividualInsurance.city = this.details.city;
          this.IndividualInsurance.dba = this.details.dba;
          this.IndividualInsurance.dunsnumber = this.details.dunsnumber;
          this.IndividualInsurance.houseNumber = this.details.houseNumber;
          this.IndividualInsurance.state = this.details.state;
          this.orderNo = "2";
          this.filterService.sendMessage("2");          
          this.IndividualInsurance.zipcode = this.details.zipcode;

          localStorage.setItem("insurancedetails", JSON.stringify(this.IndividualInsurance));

        },
        error =>{   
          debugger;                
          this.blnwrongzipcode = true;
        })

    } else {
      debugger; 
      this.errorCheck = true;
      this.ZipCodeForm.controls['zipCode'].markAsPristine();

    }    

  }

  reseterrorbln() {
    this.errorCheck = false;
  }

  _keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  countChangedHandler(count: number) {
    if (count == 1) {
      this.clientLocationAndDetailsActive = false;
      var insurancedetails = JSON.parse(localStorage.getItem("insurancedetails"));         
      if(insurancedetails != null){
          this.zipCode = insurancedetails.zipcode;
      }
      else{
        this.zipCode = null;
      }
      this.orderNo = "1";
      this.filterService.sendMessage("0");
    }
  }

  showlocation(data: any) {
    if (data.currentTarget.checked)
      this.blnhomebase = true;
    else
      this.blnhomebase = false;


  }

  CheckErrorMessage(){
    debugger;
    if(this.IndividualInsurance.businessName.length == 0){
      this.filterService.sendMessage("DiscoverError");
    }
    else if(this.IndividualInsurance.dba.length == 0){
      this.filterService.sendMessage("DiscoverError");
    }
    else if(this.IndividualInsurance.houseNumber.length == 0){
      this.filterService.sendMessage("DiscoverError");
    }
    else if(this.IndividualInsurance.address1.length == 0){
      this.filterService.sendMessage("DiscoverError");
    }
    else if(this.IndividualInsurance.state.length == 0){
      this.filterService.sendMessage("DiscoverError");
    }
    else if(this.IndividualInsurance.city.length == 0){
      this.filterService.sendMessage("DiscoverError");
    }
    else{
      this.filterService.sendMessage("ErrorFreeDiscover");
    }
  }

}
