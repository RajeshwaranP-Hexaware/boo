import { Component, OnInit } from '@angular/core';
import { UpdateFilterService } from '../../Services/FilterMessage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bussinessfooter',
  templateUrl: './bussinessfooter.component.html',
  styleUrls: ['./bussinessfooter.component.css']
})
export class BussinessfooterComponent implements OnInit {
  orderNo:number = 1;  
  filtermessage:string="";
  subscription:any;  
  Bussiness3screen:boolean = false;
  constructor(private filterService: UpdateFilterService, private _router:Router) {

    // debugger;
    this.subscription = this.filterService.getMessage().subscribe(message => {   
      if(message.text.search('Bussiness3Error') != -1)  {
        this.Bussiness3screen = true;
      }
      else if(message.text.search('Bussiness3Noerror') != -1){
        this.Bussiness3screen = false;
      }
     
    });

   }

  ngOnInit() {

  }

  CheckBussinessView() {
    if (!this.Bussiness3screen) {
      this.orderNo = this.orderNo + 1;
      if (this.orderNo > 6) {
        this.filterService.sendMessage("Coverage_1");
        this._router.navigate(['/Insurance/Coverage']);
      }
      else {
        let strbussinessorderNo = "Bussiness_" + this.orderNo;
        this.filterService.sendMessage(strbussinessorderNo);
      }
    }
  }

  MovePrevious(){
    this.orderNo = this.orderNo - 1;
    if(this.orderNo != 0){
    let strbussinessorderNo  =  "Bussiness_" + this.orderNo;
    this.filterService.sendMessage(strbussinessorderNo);           
    }
    else if(this.orderNo == 0){      
      this._router.navigate(['/Insurance/Discover']);
      
    }
  }

}
