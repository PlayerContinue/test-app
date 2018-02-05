import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {EventData} from '../_Objects/eventData';
import { LogService } from './log.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventServices {
    constructor(private http: HttpClient, private log: LogService) {}

    getEvents(url: string): Observable<EventData[]> {
        return this.http.get<EventData[]>(url).pipe(
            tap(events => this.log.log('fetched events from' + url)),
            catchError(this.log.handleError('getEvents', []))
        );
    }
}
