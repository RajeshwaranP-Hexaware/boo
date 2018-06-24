import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateFilterService } from '../../Services/FilterMessage';

@Component({
  selector: 'app-dashboardfooter',
  templateUrl: './dashboardfooter.component.html',
  styleUrls: ['./dashboardfooter.component.css']
})
export class DashboardfooterComponent implements OnInit {
  @Input() orderNo: string;
  
  @Input() count: number = 2;
  
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  filtermessage:string="";
  subscription:any;
  errorocucured:boolean=false;
  constructor(private _router:Router,private filterService: UpdateFilterService) { 

    this.subscription = this.filterService.getMessage().subscribe(message => {    
      if(message.text == 'DiscoverError'){
          this.errorocucured = true;
      }
      else if(message.text == 'ErrorFreeDiscover'){
        this.errorocucured = false;
      }
     });

  }

  ngOnInit() {  }

  MovePrevious(){
    this.count = 1;
    this.countChanged.emit(this.count);
    this.orderNo = "1";
  }

  CheckBussinessView(){    
    if(this.orderNo == "2" && !this.errorocucured){      
      this.filterService.sendMessage("Bussiness");
      this._router.navigate(['/Insurance/Bussiness']);
    }
  }
}
