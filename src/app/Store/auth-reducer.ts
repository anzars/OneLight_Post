import { from } from 'rxjs';
import * as fromauthactions from './auth-actions';

export interface State{
    username: string;
    email:string;
    loginstatus:boolean;
    token: string;
}

export const initialState : State={
    username:'',
    email:'',
    loginstatus:false,
    token:''
} 

export function authreducer( state=initialState, action :fromauthactions.authactiontype){
    switch(action.type){
    case fromauthactions.userloginconst:return {
                   ...state,
                   username: action.payload.username,
                   email:action.payload.email,
                   loginstatus:action.payload.loginstatus,
                   token: action.payload.token
    }
    case fromauthactions.userlogoutconst:return {
         ...state,
         username:'',
         email:'',
         loginstatus:false,
         token:''
    }

     default:return { ...state}




    }

}
