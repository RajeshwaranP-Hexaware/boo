import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { UpdateFilterService } from '../../Services/FilterMessage';

@Component({
  selector: 'app-leftsidepageheader',
  templateUrl: './leftsidepageheader.component.html',
  styleUrls: ['./leftsidepageheader.component.css']
})
export class LeftsidepageheaderComponent implements OnInit {
  title:string="";
  subtitle:string="";
  filtermessage:string="";
  subscription:any;
  constructor(private _router: Router,private filterService: UpdateFilterService) { }

  ngOnInit() {

    this.subscription = this.filterService.getMessage().subscribe(message => {   
      this.filtermessage = message;    
      // debugger;
      
        if(message.text == '0'){
          this.title= "Discover";
          this.subtitle = "Please mention your zip code";
        }
        else if(message.text == '2'){
          this.title= "Discover";
          this.subtitle = "Verify your address details";
        }
        else if(message.text == "Bussiness_1"){
          this.title= "Business Information";
          this.subtitle = "What is your Industry and Profession?";
        }
        else if(message.text == "Bussiness_2"){
          this.title= "Business Information";
          this.subtitle = "What type of coverage are you looking for?";
        }
        else if(message.text == "Bussiness_3"){
          this.title= "Business Information";
          this.subtitle = "Tell us about your Company details";
        }
        else if(message.text == "Bussiness_4"){
          this.title= "Business Information";
          this.subtitle = "What type of products do you manufacture?";
        }
        else if(message.text == "Bussiness_5"){
          this.title= "Business Information";
          this.subtitle = "Please tell us about the products";
        }
        else if(message.text == "Bussiness_6"){
          this.title= "Business Information";
          this.subtitle = "What cooking equipments do you use?";
        }
        else if(message.text == "Coverage_1"){
          this.title= "Coverage";
          this.subtitle = "Tell us about the claim history";
        }
        else if(message.text == "Coverage_2"){
          this.title= "Coverage";
          this.subtitle = "Tell us about the BOP coverage - Commercial, General, Liability";
        }
        else if(message.text == "Coverage_3"){
          this.title= "Coverage";
          this.subtitle = "Upload all the related documents";
        }
        else if(message.text == "CompareBuy"){
          this.title= "Quote";
          this.subtitle = "Select the option best suited for your business";
        }
        


      

    });

    var linkdata = this._router.url;         
    // if (linkdata.search('Discover') != -1 ) { 
    //   this.title= "Discover";
    //   this.subtitle = "Please mention your zip code";
    // } 
    // else if(linkdata.search('Bussiness') != -1) {
    //   this.title= "Business Information";
    //   this.subtitle = "What is your Industry and Profession?";
    // }
   
  }

}
