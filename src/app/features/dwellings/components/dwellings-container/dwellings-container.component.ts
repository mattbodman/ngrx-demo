import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DwellingsState} from '../../store/dwellings.state';
import {loadDwellings} from '../../store/dwellings.action';
import {Observable} from 'rxjs';
import {dwellingsSelector} from '../../store/dwellings.selector';

@Component({
  selector: 'app-dwellings-container',
  templateUrl: './dwellings-container.component.html',
  styleUrls: ['./dwellings-container.component.scss']
})
export class DwellingsContainerComponent implements OnInit {

  state$: Observable<DwellingsState>;

  constructor(private store: Store<DwellingsState>) { // inject the Store
  }

  ngOnInit(): void {
    this.state$ = this.store.select(dwellingsSelector); // subscribe to the selector using async pipe in template
    this.loadData();
  }

  loadData(): void {
    this.store.dispatch(loadDwellings()); // dispatch the loadDwellings action
  }

}
