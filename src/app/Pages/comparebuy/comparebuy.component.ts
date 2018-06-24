import { Component, OnInit } from '@angular/core';
import { UpdateFilterService } from '../../Services/FilterMessage';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-comparebuy',
  templateUrl: './comparebuy.component.html',
  styleUrls: ['./comparebuy.component.css']
})
export class ComparebuyComponent implements OnInit {

  constructor(private titledata: Title, private filterService: UpdateFilterService) {
    titledata.setTitle("Insurance Compare & Buy"); 
   }

  ngOnInit() {    
    var  popupContainerHeight  =  document.getElementById('popupContainer').clientHeight;
    let  backdropContainer_2Height =  popupContainerHeight + 150;
    document.getElementById('backdropContainer_2').style.height  =  backdropContainer_2Height + 'px';
    debugger; 
    this.filterService.sendMessage('ComapreBuy');
  }

}
