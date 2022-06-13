import {createSelector} from '@ngrx/store';

// get the entire app state
const selectApp = (state) => state;

// pass the app state as first arg, then select which slice we want
export const dwellingsSelector = createSelector(selectApp, (state) => state.dwellings);
