import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';

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
      delay(1000),
      map((response: any) => ({name: response.data.structure.name, description: response.data.structure.description})),
    );
  }
}
