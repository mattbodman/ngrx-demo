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

  // @ts-ignore
  loadDwellings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDwellings),
      switchMap(() => this.dwellingsApiService.getDwellings().pipe(
        map(data => loadDwellingsSuccess({data})),
        catchError(error => {
          return of(loadDwellingsFailure({error}));
        })
      ))
    );
  });
}
