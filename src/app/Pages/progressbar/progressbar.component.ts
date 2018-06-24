import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { UpdateFilterService } from '../../Services/FilterMessage';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  percentage:number=0;
  filtermessage:string="";
  subscription:any;
  constructor(private _router: Router,private filterService: UpdateFilterService) { }

  ngOnInit() {       
    var linkdata = this._router.url;      
    this.subscription = this.filterService.getMessage().subscribe(message => {    
      this.filtermessage = message;          
        if(message.text == '0'){          
          this.percentage  = 0;
        }
        else if(message.text == '2'){          
          this.percentage  = 2;
        }
        else if(message.text == "Bussiness_1"){          
          this.percentage  = 10;
        }
        else if(message.text == "Bussiness_2"){          
          this.percentage  = 20;
        }
        else if(message.text == "Bussiness_3"){
          this.percentage  = 30;
        }
        else if(message.text == "Bussiness_4"){
          this.percentage  = 40;
        }
        else if(message.text == "Bussiness_5"){
          this.percentage  = 50;
        }
        else if(message.text == "Bussiness_6"){
          this.percentage  = 60;
        }
        else if(message.text == "Coverage_1"){
          this.percentage  = 70;
        }
        else if(message.text == "Coverage_2"){
          this.percentage  = 70;
        }
        else if(message.text == "Coverage_3"){
          this.percentage  = 85;
        }
        else if(message.text == "CompareBuy"){
          this.percentage  = 90;
        }
        
    });

  }

}


