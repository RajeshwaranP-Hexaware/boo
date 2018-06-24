import { Component, OnInit } from '@angular/core';
import { UpdateFilterService } from '../../Services/FilterMessage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coveragefooter',
  templateUrl: './coveragefooter.component.html',
  styleUrls: ['./coveragefooter.component.css']
})
export class CoveragefooterComponent implements OnInit {
orderNo:number = 1;  
  filtermessage:string="";
  subscription:any;  
  constructor(private filterService: UpdateFilterService,private _router:Router) {

    // debugger;
    // this.subscription = this.filterService.getMessage().subscribe(message => {   
    //   if(message.text.search('Bussiness_') != -1)  {
    //       let arraydata = message.text.split('_');
    //       this.orderNo = arraydata[1];
    //   }
    //   this.orderNo = Number(message.text); 
    // });

   }

  ngOnInit() {

  }

  CheckBussinessView(){    
    this.orderNo = this.orderNo + 1;
    if(this.orderNo > 3){        
      this.filterService.sendMessage("CompareBuy");
      this._router.navigate(['/Insurance/CompareBuy']);
    }
    else{
    let strbussinessorderNo  =  "Coverage_" + this.orderNo;
    this.filterService.sendMessage(strbussinessorderNo);           
    }

  }

  MovePrevious(){
    this.orderNo = this.orderNo - 1;
    if(this.orderNo < 1){
      this.filterService.sendMessage("Bussiness_6");
      this._router.navigate(['/Insurance/Bussiness']);
    }
    else{
    let strbussinessorderNo  =  "Coverage_" + this.orderNo;
    this.filterService.sendMessage(strbussinessorderNo);           
    }
  }

}
