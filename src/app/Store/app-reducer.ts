import * as fromauthreducer from './auth-reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState{
    'authlistkey': fromauthreducer.State
}

export const appreducer:ActionReducerMap<AppState>={
    'authlistkey': fromauthreducer.authreducer
}