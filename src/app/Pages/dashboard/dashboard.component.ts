import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {  
  pagelink: string = "1";  
  percentageNo:number =0;
  constructor() { }

  ngOnInit() {
    
  }

}
