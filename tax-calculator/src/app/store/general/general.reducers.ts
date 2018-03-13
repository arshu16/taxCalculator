import * as FromGeneralActions from './general.actions';
import { ResultItem } from './../models/result-item';

export interface GeneralState {
  readonly [index: number] : ResultItem;
}

export const generalStateInit: GeneralState = [];

export function GeneralReducer(state = generalStateInit, action) {
    switch(action.type) {
        case FromGeneralActions.ADD_RESULT: {
            return action.payload;
        }
        case FromGeneralActions.CLEAR_RESULT: {
            return [];
        }
        default: 
            return state;
    }
}