import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { EventData } from '../_Objects/eventData';
import { LogService } from './log.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ApiDataService {

    constructor(private http: HttpClient, private log: LogService) { }

    public unwrapData<T>(data: APIData<T>): T {
        return data.data;
    }

    public getData<T>(url: string): Observable<T> {
        /*return this.http.get<T>(url, httpOptions).pipe(
            tap(_ => this.log.log('fetched events from')),
            catchError(this.log.handleError('getEvents', []))
        );*/
        return null;
    }
}

/*
Object for containing data returned from the API
*/
export class APIData<T> {
    data: T;

    constructor(options: {
        data?: T | string
    }) {
        if (typeof options.data !== 'string') {
            this.data = options.data;
        } else {
            this.data = JSON.parse(options.data).data;
        }


    }

}
