import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DwellingsApiService {

  constructor(private http: HttpClient) {
  }

  getDwellings(): Observable<any> {
    return this.http.get(
      'https://api.data.abs.gov.au/data/ABS,RES_DWELL/1..Q?startPeriod=2019-Q4&endPeriod=2020-Q1&format=jsondata',
      {}).pipe(
      delay(1000), // this is to slow down the api response, just to make the data load more obvious to the user
      map((response: any) => {
        return {name: response.data.structure.name, description: response.data.structure.description};
      }),  // map the response data to the data we're really interested in
    );
  }
}
