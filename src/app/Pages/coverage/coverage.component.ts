
import { Component, OnInit } from '@angular/core';
import { CoverageService } from '../../Services/coverage.service';
import { UpdateFilterService } from '../../Services/FilterMessage';
import { DatePipe } from '@angular/common';
import { IndividualInsurance } from '../../Models/individual-insurance';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css'],
  providers: [CoverageService, DatePipe]
})
export class CoverageComponent implements OnInit {
  quoteSubmissionData:any;
  Coveragepagedetails: string = '';
  currentdate: any;
  IndividualInsurance: IndividualInsurance;
  clientId: string;
  orderNo: number;
  subscription: any;
  mockClaimHistory:any;
  claimtype:any;
  status:any;
  policyFromdate:any;
  policyToDate:any;
  lossdate:any;
  claimnumber:any;
  totalincurred:any;
  provider:any;
  PropertyBaseDeductible:any;
  liabilityLimitOccurennce:any;
  liabilityDeductibles:any;
  liabilityDeductibleTypes:any;
  file_source:any;  
  /* Quote submission data*/
  businessPropertyLimit:any = '1000';
  propertyBaseDeductible:any;
  businessDeductible:any = '500';
  generalLiabilityLimit:any;
  pDDeductible:any;
  pDDeductibleType:any; 
  buildingValueLimit:any = '250000';  
  GlassDeductibleExist:boolean =false;
  businessContentsCoverageExist:boolean =false;
  ComputerCoverageExist:boolean =false;
  businessIncomeExist:boolean =false;
  empPracticesLiabilityExist:boolean =false;
  dataBreachExist:boolean =false;
  commercialAutoQuoteExist:boolean =false;
  commercialVehicleExist:boolean =false;
  blncoveragebuilding:boolean = true;
  /*End Quote submission data*/
  filenameinfo:string;
  selectfiletype:any = "Select Document";
  Filetypecollection:any;
  constructor(private titledata: Title,  private _coverageService: CoverageService, private filterService: UpdateFilterService, private datepipe: DatePipe) {

    this.orderNo = 1;
    titledata.setTitle("Insurance Coverage"); 


  }


  ngOnInit() {
 var  popupContainerHeight  =  document.getElementById('popupContainer').clientHeight;
    let  backdropContainer_2Height =  popupContainerHeight + 150;
    document.getElementById('backdropContainer_2').style.height  =  backdropContainer_2Height + 'px';
    debugger; 
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

   this.Filetypecollection= [
     "Select Document",
     ".docx",
     ".doc",
     ".xls",
     ".xslx",
     ".jpg",
     ".jpeg"
   ]

    this.filterService.sendMessage('Coverage');
    var currentdt = Date.now();
    let latest_date = this.datepipe.transform(currentdt, 'yyyy-MM-dd');
    this.currentdate = latest_date;

    this.subscription = this.filterService.getMessage().subscribe(message => {

      if (message.text.search('Coverage_') != -1) {
        let arraydata = message.text.split('_');
        this.orderNo = arraydata[1];        
        if(this.orderNo == 3){
          this.quotesubmission();
        }
      }

    });


    this.Coveragepagedetails = "Coverage_1";
    this.getMockClaimHistory();
    this.getLiabilityLimitOccurrenceTerms();
    this.getLiabilityDeductibles();
    this.getLiabilityDeductibleTypes();
    this.getPropertyOptionalDeductibleTerms();
    // this.quotesubmission();
    this.UpdateZipCodedetailsdata();
    this.filterService.sendMessage(this.Coveragepagedetails);



  }

  getMockClaimHistory() {
    let tempData = { "claimnumber": "CPC68373" };

    this._coverageService.GetMockClaimHistory(tempData).subscribe(
      data => {
        //console.log(JSON.parse(data._body));
        this.mockClaimHistory = JSON.parse(data._body);
        this.policyFromdate =this.datepipe.transform(this.mockClaimHistory.policyfromdate, 'yyyy-MM-dd');   
        this.policyToDate =this.datepipe.transform(this.mockClaimHistory.policytodate, 'yyyy-MM-dd');   
        this.lossdate =this.datepipe.transform(this.mockClaimHistory.lossdate, 'yyyy-MM-dd');   
        this.claimtype = this.mockClaimHistory.claimtype;
        this.status =  this.mockClaimHistory.status;
        this.claimnumber = this.mockClaimHistory.claimnumber;
        this.totalincurred = this.mockClaimHistory.totalincurred;
        this.provider = this.mockClaimHistory.provider;
        
      });
  }
  getLiabilityLimitOccurrenceTerms() {
    this._coverageService.GetLiabilityLimitOccurrenceTerms().subscribe(
      data => {                    
       this.liabilityLimitOccurennce = JSON.parse(data._body);
       console.log(this.liabilityLimitOccurennce);
      for(let i=0; i < this.liabilityLimitOccurennce.length; i++){      
          if(i == 0)          
              this.generalLiabilityLimit = this.liabilityLimitOccurennce[i].value;
        
      }
      });
  }

  getLiabilityDeductibles() {
    this._coverageService.GetLiabilityDeductibles().subscribe(
      data => {
        console.log(JSON.parse(data._body));
        this.liabilityDeductibles = JSON.parse(data._body);
        for(let i=0; i < this.liabilityDeductibles.length; i++){
          if(!isNaN(this.liabilityDeductibles[i].value) ){
            this.pDDeductible = Number(this.liabilityDeductibles[i].value);
            break;
          }
        }
      });
  }
  getLiabilityDeductibleTypes() {
    this._coverageService.GetLiabilityDeductibleTypes().subscribe(
      data => {
        console.log(JSON.parse(data._body));
        this.liabilityDeductibleTypes = JSON.parse(data._body);
        for(let i=0; i < this.liabilityDeductibleTypes.length; i++){
          if(this.liabilityDeductibleTypes[i].value != null ){
            this.pDDeductibleType = this.liabilityDeductibleTypes[i].value;
            break;
          }
        }
        

      });
  }
  getPropertyOptionalDeductibleTerms() {
    this._coverageService.GetPropertyOptionalDeductibleTerms().subscribe(
      data => {        
      //  console.log(JSON.parse(data._body));      
      this.PropertyBaseDeductible = JSON.parse(data._body);
      for(let i=0; i < this.PropertyBaseDeductible.length; i++){
        if(!isNaN(this.PropertyBaseDeductible[i].value) ){
          this.propertyBaseDeductible = Number(this.PropertyBaseDeductible[i].value);
          break;
        }
      }
      
      });
  }

  quotesubmission() {
    // let tempData = {
    //   "accountNumber": "3305165638",
    //   "accountRegistrationType": "corporation",
    //   "buildingValueLimit": "10000",
    //   "businessContentsCoverageExist": "false",
    //   "businessDeductible": "0",
    //   "businessIncomeExist": "false",
    //   "businessPropertyLimit": "12500",
    //   "commercialAutoQuoteExist": "false",
    //   "commercialVehicleExist": "false",
    //   "computerCoverageExist": "false",
    //   "dataBreachExist": "false",
    //   "empPracticesLiabilityExist": "false",
    //   "fEINOfficialID": "123-45-6789",
    //   "generalLiabilityLimit": "300/600/600",
    //   "glassDeductibleExist": "false",
    //   "pDDeductible": "500",
    //   "pDDeductibleType": "Per Claim",
    //   "producerCodeId": "pc:6",
    //   "productCode": "BusinessOwners",
    //   "propertyBaseDeductible": 2500
    // };

    let tempData = {
      "accountNumber" : localStorage.getItem("clientiddetails"),
      "accountRegistrationType" : localStorage.getItem("accountRegistrationType"),
      "generalLiabilityLimit": this.generalLiabilityLimit,
      "pDDeductible": this.pDDeductible,
      "pDDeductibleType": this.pDDeductibleType,
      "propertyBaseDeductible": this.propertyBaseDeductible,
      "fEINOfficialID": "123-45-6789",
      "producerCodeId": "pc:6",
      "buildingValueLimit": this.buildingValueLimit,      
      "businessPropertyLimit": this.businessPropertyLimit,
      "businessDeductible": this.businessDeductible,

      "businessContentsCoverageExist": this.businessContentsCoverageExist,
      "businessIncomeExist": this.businessIncomeExist,
      "glassDeductibleExist": this.GlassDeductibleExist,
      "computerCoverageExist": this.ComputerCoverageExist,      
      "empPracticesLiabilityExist": this.empPracticesLiabilityExist,      
      "dataBreachExist": this.dataBreachExist,
      "commercialAutoQuoteExist": this.commercialAutoQuoteExist,
      "commercialVehicleExist": this.commercialVehicleExist,

      "productCode": "BusinessOwners"
      };
  

    this._coverageService.Quotesubmission(tempData).subscribe(
      data => {
      //  console.log(JSON.parse(data._body));
      this.quoteSubmissionData = JSON.parse(data._body)
      localStorage.setItem("quoteSubmissionJobNumber", JSON.stringify(this.quoteSubmissionData.quoteSubmissionJobNumber));
      });
  }

  UpdateZipCodedetailsdata() {
    var clientdetailsinfo = JSON.parse(localStorage.getItem("clientiddetails"));
    this.clientId = clientdetailsinfo;

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
  
  
  // Check for changes in files inputs via a DOMString reprsenting the name of an event
  fileChange(event: any) {
    // Instantiate an object to read the file content
    let reader = new FileReader();
    // when the load event is fired and the file not empty
    if(event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      
      this.file_source = event.target.files[0];
      this.filenameinfo = this.file_source.name;
    }
  }

  // Upload the file to the API
  uploadDocumentData() {
    // Instantiate a FormData to store form fields and encode the file
    let tempData = new FormData();
    // Add file content to prepare the request
    tempData.append("file", this.file_source);
    tempData.append("quoteSubmissionNumber", JSON.parse(localStorage.getItem("quoteSubmissionJobNumber")));
    tempData.append("chanel ", 'portal');
    // Launch post request
    this._coverageService.UploadPolicyDoc(tempData).subscribe(
      data => {
                
        console.log(JSON.parse(data._body));
        if(data._body == "true")
            this.filenameinfo = "File Upload Successfully";
        else
           this.filenameinfo = "File Not Upload Successfully";
      });

}

}