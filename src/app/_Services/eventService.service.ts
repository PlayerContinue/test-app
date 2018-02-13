import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {EventData} from '../_Objects/eventData';
import { LogService } from './log.service';
import {APIData, APIInterface} from '../_Services/apiDataService.service';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventServices {
    constructor(private http: HttpClient, private log: LogService) {}

    /*public getEvents(url: string): Observable<APIData<EventData[]>[]> {
        return this.http.get<APIData<EventData[]>[]>(url).pipe(
            tap(events => ),
            catchError(this.log.handleError('getEvents', []))
        );

    }*/


}
