import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import * as GeneralReducer from './general/general.reducers';

export interface AppStore {
  general: GeneralReducer.GeneralState;
}

export const reducer: ActionReducerMap<AppStore> = {
  general: GeneralReducer.GeneralReducer
};

export function logger(reducer: ActionReducer<AppStore>): ActionReducer<AppStore> {
  return function(state: AppStore, action: any): AppStore {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppStore>[] = [logger];