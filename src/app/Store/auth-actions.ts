import { Action } from "@ngrx/store";

export const userloginconst ='user_login';
export const userlogoutconst = 'user_logout';

export class userloginclass implements Action{
   readonly type = userloginconst;

   constructor(public payload){}

}

export class userlogoutclass implements Action{
     readonly type = userlogoutconst;
     
     constructor(public payload){}
}

export type authactiontype = userloginclass|userlogoutclass;