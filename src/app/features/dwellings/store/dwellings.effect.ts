import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {DwellingsApiService} from '../dwellings-api.service';
import {loadDwellings, loadDwellingsFailure, loadDwellingsSuccess} from './dwellings.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class DwellingsEffects {
  constructor(private actions$: Actions, private dwellingsApiService: DwellingsApiService) {
  }

  // the effect pipes the "actions$" stream.  As each action is performed, the stream emits
  loadDwellings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDwellings), // listen for the loadDwellings action
      switchMap(() => this.dwellingsApiService.getDwellings().pipe(  // hand over to the getDwellings API method
        map(data => loadDwellingsSuccess({data})), // pass the data to the Success action
        catchError(error => {
          return of(loadDwellingsFailure({error}));  // pass the error to the Failure action
        })
      ))
    );
  });
}
