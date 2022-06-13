import {createSelector} from '@ngrx/store';

const selectApp = (state) => state;

export const dwellingsSelector = createSelector(selectApp, (state) => state.dwellings);
