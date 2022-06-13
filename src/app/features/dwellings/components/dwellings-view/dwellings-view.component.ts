import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DwellingsState} from '../../store/dwellings.state';

@Component({
  selector: 'app-dwellings-view',
  templateUrl: './dwellings-view.component.html',
  styleUrls: ['./dwellings-view.component.scss']
})
export class DwellingsViewComponent implements OnInit {

  @Input() state: DwellingsState;
  @Output() reload: EventEmitter<null> = new EventEmitter<null>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.reload.emit();
  }

}
