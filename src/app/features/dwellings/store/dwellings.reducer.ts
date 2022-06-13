import {createReducer, on} from '@ngrx/store';
import {DwellingsState} from './dwellings.state';
import {loadDwellings, loadDwellingsFailure, loadDwellingsSuccess} from './dwellings.action';

const initialState: DwellingsState = {
  loaded: false,
  data: null,
  error: null,
};

export const dwellingsReducer = createReducer(
  initialState,
  on(loadDwellings, (state) => ({...state, loaded: false, data: null})),
  on(loadDwellingsSuccess, (state, payload) => ({...state, loaded: true, data: payload.data})),
  on(loadDwellingsFailure, (state, payload) => ({...state, loaded: false, error: payload.error}))
);
