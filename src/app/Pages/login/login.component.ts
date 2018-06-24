import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CookieService]
})
export class LoginComponent implements OnInit {
  invalidusernamepassword:string=undefined;
  invalidusername:string=undefined;
  
  invalidpassword:string=undefined;
  notminpassword:string=undefined;

  Employee:any={};
  Employeeusername:string='';
  Employeepassword:string='';
  saveUsername:boolean=false;
  SuccessLogin:string='';

  validuser:boolean = true;
  validpass:boolean= true;

  loading:boolean=false;
  username:string = "Fleming C";
  userpassword:string = "Fleming@123";


  constructor(private _cookieService:CookieService,private titledata: Title,private _router:Router) { 
    titledata.setTitle("Insurance Login");  
  }

  ValidUserName(){ 
    
    this.invalidusername=undefined;
    this.validuser = true;
  
  if(this.Employeeusername.trim().length == 0)
    {     
      this.invalidusername="UserName is required";     
      this.loading = false;   
      this.validuser = false;
    }
  else if(this.Employeeusername.trim().toLowerCase() != this.username.trim().toLowerCase()){
    this.invalidusername="Wrong User Name entered";     
    this.loading = false;   
    this.validuser = false;
  }
    
  }

  ValidPassword()
  {   

     this.invalidpassword = undefined;
    
     this.validpass = true;
     
    if(this.Employeepassword.trim().length ==0)
      {
        
        this.invalidpassword="Password is required";
        this.loading = false;
        this.validpass = false;
      }     
    else if(this.Employeepassword.trim().toLowerCase() != this.userpassword.trim().toLowerCase()){
        this.invalidpassword="Wrong Password entered";     
        this.loading = false;   
        this.validpass = false;
      }
    
  }

  LoginData(){ 
       
    this.invalidusername=undefined;    
    this.invalidpassword = undefined;
    this.notminpassword= undefined;
    this.loading = true;     
    this.Employeeusername = this.Employeeusername.trim();
    this.Employeepassword = this.Employeepassword.trim();
    
    this.ValidUserName();
    this.ValidPassword();
    
    if(this.validuser && this.validpass)
    {  


      if(this.saveUsername)
        this._cookieService.set('dockitusername',this.Employeeusername);                  
     else
        this._cookieService.set('dockitusername','');

        localStorage.setItem("insurancedetails", null);  
      this._router.navigate(['/Insurance/Discover']);


    }
  }

  ngOnInit() {
  }

}
