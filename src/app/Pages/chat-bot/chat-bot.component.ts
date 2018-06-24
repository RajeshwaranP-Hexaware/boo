import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../appSettings';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  showchatboxDetails: boolean = false;
  chatlink:string='';

  constructor() { }

  ngOnInit() {    
    this.chatlink = AppSettings.chat_link;    
  }

  showchatbox(){
    this.showchatboxDetails = !this.showchatboxDetails;
  }
}
