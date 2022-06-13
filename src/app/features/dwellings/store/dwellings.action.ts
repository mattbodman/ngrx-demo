import {createAction, props} from '@ngrx/store';

// define an action for each step
export const loadDwellings = createAction(
  '[Dwellings] Load',
);

export const loadDwellingsSuccess = createAction(
  '[Dwellings] Load success',
  props<{data: any}>()
);

export const loadDwellingsFailure = createAction(
  '[Dwellings] Load failure',
  props<{error: any}>()
);
