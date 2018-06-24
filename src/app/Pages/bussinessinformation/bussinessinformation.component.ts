import { Component, OnInit } from '@angular/core';
import { BusinessinformationService } from '../../Services/businessinformation.service';
import { IndividualInsurance } from '../../Models/individual-insurance';
import { log } from 'util';
import { UpdateFilterService } from '../../Services/FilterMessage';
import { IndustryDetails, Profession } from '../../Models/Industry';
import { DatePipe } from '@angular/common';
import {DatepickerOptions} from 'ng2-datepicker';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-bussinessinformation',
  templateUrl: './bussinessinformation.component.html',
  styleUrls: ['./bussinessinformation.component.css'],
  providers: [BusinessinformationService,DatePipe]
})
export class BussinessinformationComponent implements OnInit {
  IndustryDetails: IndustryDetails;
  Profession:Profession;
  industryprofessiondatadeails:any;
  IndividualInsurance: IndividualInsurance;
  ClientId:string="";
  contactname:string="";
  currentIndustry:string="";
  currentProfession:string="";  
  orderNo:number;
  filtermessage:string="";
  subscription:any;  
  Bussinesspagedetails:string="";
  insuranceproductdetails:any;
  currentdate:any;
  bussinesscompanydetails:any;
  revenuecurrency:string=""  ;
  previouscurrency:string="";
  industrydetails:string="";
  ProductProfessionselectdata:any;
  blncookers:boolean = true;
  Yearsoperation:number = 25;
  updatedAvaialbleProductDetails:any=[];
  options: DatepickerOptions = {

    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'DD/MM/YYYY',
    barTitleFormat: 'MMMM YYYY',  
    // dayNamesFormat: 'dd',
    firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
    // maxDate: new Date(Date.now()),  // Maximal selectable date  
    //minDate: new Date(Date.now()), // Minimal selectable date
    // minDate: new Date(Date.now()),
    minDate: this.GetYesterday(),
  
    
    barTitleIfEmpty: 'Click to select a date'
  };

  constructor(private titledata: Title, private _businessinformationService: BusinessinformationService, private filterService: UpdateFilterService,private datepipe: DatePipe) {
    
    titledata.setTitle("Insurance Bussines Information");
    
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

    this.Profession = {
      aerospace: false,
      automotive: false,
      computers: false,
      consumer: false,
      foodbeverages: true,
      furniture: false,
      health: false,
      mechanical: false,
      woodpaper: false,
    }


    this.IndustryDetails = {
      Manufacture : true,
      realestate : false,
      sports : false,
      transportation : false,
      healthcare : false,
      food : false,
      consulting : false,
      education : false,
      finance : false,
      agri : false,
    }

    this.orderNo = 1;

  }

  ngOnInit() {
    // debugger;
     var  popupContainerHeight  =  document.getElementById('popupContainer').clientHeight;
    let  backdropContainer_2Height =  popupContainerHeight + 200;
    document.getElementById('backdropContainer_2').style.height  =  backdropContainer_2Height + 'px';
    debugger; 

    var currentdt = Date.now();
    let latest_date =this.datepipe.transform(currentdt, 'yyyy-MM-dd');   
    this.currentdate = latest_date;

    this.Bussinesspagedetails = "Bussiness_1"; 
    this.subscription = this.filterService.getMessage().subscribe(message => {  
     
      if(message.text.search('Bussiness_') != -1)  {        
        let arraydata = message.text.split('_');
        this.orderNo = arraydata[1];                               
      }
      
    });
     
    this.filterService.sendMessage(this.Bussinesspagedetails);    
    this.UpdateZipCodedetailsdata();
    this.getindustryprofessiondetails();
    this.getAvailableProductsDetails();
    this.getCompanyDetails();
    this.getIndustry();
  }

  UpdateZipCodedetailsdata(){
    var insurancedetails = JSON.parse(localStorage.getItem("insurancedetails"));         
    this.IndividualInsurance.address1 = insurancedetails.address1;
    this.IndividualInsurance.address2 = insurancedetails.address2;
    this.IndividualInsurance.businessName = insurancedetails.businessName;
    this.IndividualInsurance.city = insurancedetails.city;
    this.IndividualInsurance.dba = insurancedetails.dba;
    this.IndividualInsurance.dunsnumber = insurancedetails.dunsnumber;
    this.IndividualInsurance.houseNumber = insurancedetails.houseNumber;
    this.IndividualInsurance.state = insurancedetails.state;
  }

  getindustryprofessiondetails() {
    let tempData = { "contactDTO": { "name": "Cathy Candy LLC", "primaryAddress": { "addressLine1": "Alexander Rd", "addressLine2": "Alexander", "city": "Little Rock", "postalCode": "72002", "state": "Arkansas" } } };

    this._businessinformationService.GetAccountDetails(tempData).subscribe(
      data => {        
        let accoutndetailsinfo = JSON.parse(data._body);      
        this.ClientId = accoutndetailsinfo.accountNumber;
        localStorage.setItem("clientiddetails", this.ClientId);

      });
    this._businessinformationService.GetIndustryProfessionDetails().subscribe(
      data => {                
        this.industryprofessiondatadeails = JSON.parse(data._body);                
        var result = Object.keys(this.industryprofessiondatadeails ).map(e=>this.industryprofessiondatadeails [e]);        
        this.industryprofessiondatadeails = result;        
        this.industryprofessiondatadeails = this.industryprofessiondatadeails.filter(x=>x.businessname == this.IndividualInsurance.businessName);  
      });
  }
  
  getAvailableProductsDetails(){
    this._businessinformationService.GetAvailableProducts().subscribe(
      data => {         
        this.insuranceproductdetails = JSON.parse(data._body);        
        //console.log(this.insuranceproductdetails);
        let CommercialProperty= {
          'code':this.insuranceproductdetails[5].code,
          'value':'Commercial Property '
        };
        let GeneralLiability= {
          'code':this.insuranceproductdetails[0].code,
          'value':'General Liability '
        };
        let BusinessOwners ={
          'code':this.insuranceproductdetails[4].code,
          'value':'Business owners policy (Property & general Liability)   '
        };       
        let BusinessAuto = {
          'code':this.insuranceproductdetails[1].code,
          'value':'Commercial Auto Liability (for vehicles titled to your business)'
        };
        let WorkersComp ={
          'code':this.insuranceproductdetails[6].code,
          'value':"Worker's compensation"
        };        
        let CommercialPackage ={
          'code':this.insuranceproductdetails[3].code,
          'value':'Commercial Package Policy'
        }; 
        let InlandMarine = {
          'code':this.insuranceproductdetails[2].code,
          'value':'Inland Marine'
        };
        this.updatedAvaialbleProductDetails.push(CommercialProperty,GeneralLiability,BusinessOwners,BusinessAuto,WorkersComp,CommercialPackage,InlandMarine)
      });
  }

  getCompanyDetails(){
    let tempData = {"federalid":"80-473-5132"};

    this._businessinformationService.GetCompanyDetails(tempData).subscribe(
      data => {                 
        this.bussinesscompanydetails = JSON.parse(data._body);   
       // console.log(this.bussinesscompanydetails);
        localStorage.setItem("accountRegistrationType", this.bussinesscompanydetails.registrationtype);       
        this.revenuecurrency = "$" + this.bussinesscompanydetails.revenuecurr; 
        this.previouscurrency =  "$" + this.bussinesscompanydetails.revenueprev; 
      });
  }


  
  getIndustry(){
    this._businessinformationService.GetIndustry().subscribe(
      data => {         
        this.industrydetails = JSON.parse(data._body);
       // console.log(this.industrydetails);
       // console.log(data);
      });
  }

  StaticProductProfession(){    
    this.ProductProfessionselectdata.push({ "code": "2064", "value": "tCandy and Other Confectionery Products (chocolate confectionery)" });
    localStorage.setItem("ProductProfessionselectdata", JSON.stringify(this.ProductProfessionselectdata));
  }

  
  GetYesterday(){
    var dt = new Date(Date.now());
    return new Date((dt.setDate(dt.getDate()-1)));

 }


 _keyPress(event: any) {
  const pattern = /[0-9\+\-\ ]/;
  let inputChar = String.fromCharCode(event.charCode);

  if (!pattern.test(inputChar)) {
    // invalid character, prevent input
    event.preventDefault();
  }
}

CheckErrorMessage(){
  if(this.bussinesscompanydetails.federalid.length == 0){
    this.filterService.sendMessage("Bussiness3Error");
  }
  else if(this.currentdate.length == 0){
    this.filterService.sendMessage("Bussiness3Error");
  }
  else if(this.Yearsoperation == 0){
    this.filterService.sendMessage("Bussiness3Error");
  }
  else if(this.bussinesscompanydetails.registrationtype.length == 0){
    this.filterService.sendMessage("Bussiness3Error");
  }
  else if(this.bussinesscompanydetails.employeenum.length == 0){
    this.filterService.sendMessage("Bussiness3Error");
  }
  else if(this.currentdate.length == 0){
    this.filterService.sendMessage("Bussiness3Error");
  }
  else if(this.revenuecurrency.length == 0){
    this.filterService.sendMessage("Bussiness3Error");
  }
  else{
    this.filterService.sendMessage("Bussiness3Noerror");
  }
  
}
  
}
