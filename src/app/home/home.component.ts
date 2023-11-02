import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppreducer from '../Store/app-reducer';
import * as fromauthactions from '../Store/auth-actions';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  user:any;
  fbtoken:any;
  gtoken:any;
  constructor(private authservice: SocialAuthService ,private store:Store<fromAppreducer.AppState> ,private router:Router ,private route:ActivatedRoute){

  }

  ngOnInit(): void {
    debugger;
    this.authservice.authState.subscribe((user:any) => {
      
      console.log(user.firstName);
      console.log(user.lastName);
      console.log(user.email);
      console.log(user.authToken);
      this.user = user;
    let userdata={
      username:user.firstName +user.lastName,
      email:user.email,
      loginstatus:true,
      token:user.authToken

    }

    this.store.dispatch(new fromauthactions.userloginclass(userdata));
    this.store.select('authlistkey').subscribe((data)=>{
      console.log('From state');
      console.log(data);
    let auth=localStorage.getItem('auth');
    console.log('localstorage');
    console.log(auth);


    })

  

      
    });
   
    
   
  
  }
  payment(){
    this.router.navigate(['/payment'],{relativeTo:this.route})
  }
  loginwithfacebook(){
    this.authservice.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logout(){
    this.authservice.signOut();
    this.authservice.authState.subscribe((user:any) => {
      
      console.log(user);
      this.user = user;
    this.store.dispatch(new fromauthactions.userlogoutclass(''));
    console.log('from state after log off');
    this.store.select('authlistkey').subscribe((data)=>{
      console.log(data);
    })

    });
  }
 

}
