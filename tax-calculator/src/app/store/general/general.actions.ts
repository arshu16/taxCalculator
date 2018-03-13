import { Action } from '@ngrx/store';
import { ResultItem } from './../models/result-item';


export const ADD_RESULT = 'ADD_RESULT';
export const CLEAR_RESULT = 'CLEAR_RESULT';

export class AddResult implements Action {
  readonly type = ADD_RESULT;
  constructor(public payload: ResultItem[] = null) { }
}

export class ClearResult implements Action {
  readonly type = ADD_RESULT;
  constructor(public payload: ResultItem[] = null) { }
}

export type GeneralActions = AddResult | ClearResult;
