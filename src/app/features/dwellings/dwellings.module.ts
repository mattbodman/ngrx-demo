import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DwellingsContainerComponent} from './components/dwellings-container/dwellings-container.component';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {DwellingsEffects} from './store/dwellings.effect';
import { DwellingsViewComponent } from './components/dwellings-view/dwellings-view.component';

const routes: Routes = [
  {path: '', component: DwellingsContainerComponent},
];

@NgModule({
  declarations: [DwellingsContainerComponent, DwellingsViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DwellingsModule {
}
