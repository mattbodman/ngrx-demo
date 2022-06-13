import {DwellingsInterface} from '../dwellings.interface';

// the "shape" of our Dwellings Redux Store
export interface DwellingsState {
  loaded: boolean;
  data: DwellingsInterface;
  error: any;
}
