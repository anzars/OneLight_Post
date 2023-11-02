import { Injectable } from "@angular/core";
import { Actions,ofType,createEffect} from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as fromauthactions from "./auth-actions";
import { exhaustMap, of, switchMap, tap } from "rxjs";


@Injectable()
export class autheffects{
    constructor(private action$:Actions ,private http:HttpClient,private router:Router){

    }

    loginsuccess= createEffect(()=>this.action$.pipe(
      ofType(fromauthactions.userloginconst),
      tap((action:any)=>{
        debugger;
        localStorage.setItem('auth',action.payload.token)
      })

    ),{dispatch:false});

   
    
}