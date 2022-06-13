import {DwellingsInterface} from '../dwellings.interface';

export interface DwellingsState {
  loaded: boolean;
  data: DwellingsInterface;
  error: any;
}
