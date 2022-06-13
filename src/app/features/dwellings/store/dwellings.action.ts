import {createAction, props} from '@ngrx/store';
import {HttpParams} from '@angular/common/http';

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
