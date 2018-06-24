import { Component, OnInit,Input } from '@angular/core';
import { UpdateFilterService } from '../../Services/FilterMessage';

@Component({
  selector: 'app-pagelink',
  templateUrl: './pagelink.component.html',
  styleUrls: ['./pagelink.component.css']
})
export class PagelinkComponent implements OnInit {
  pagelink: number;
  filtermessage:string="";
  subscription:any;
  constructor(private filterService: UpdateFilterService) { }

  ngOnInit() {    

    this.subscription = this.filterService.getMessage().subscribe(message => {       
      this.filtermessage = message; 
      if(message.text == 'Discover'){
          this.pagelink = 1;
      }
      else if(message.text == 'Bussiness'){
        this.pagelink = 2;
      }
      else if(message.text == 'Coverage'){
        this.pagelink =3;
      }
      else if(message.text == 'ComapreBuy'){
        this.pagelink = 4;
      }

    });

    //console.log(this.pagelink);
  }

}
