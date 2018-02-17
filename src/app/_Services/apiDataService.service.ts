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


    /**
     * Make a call to the API and return the data
     * @param url - The API URL
     */
    getData<T>(url: string): Observable<APIData<T>[]> {
        return this.http.get<APIData<T>[]>(url, httpOptions).pipe(
            tap(_ => this.log.log('fetched events from')),
            catchError(this.log.handleError('getEvents', []))
        );
    }
    /**
     * Upacks data provided from the API
     * @param packed - The APIData object containing the list of data
     * @param type - The type of data contained in the data segment
     * @param callback - The function on what to do with the data after it has been turned into it's object
     * @param thisArg - An object to which the this keyword
     * can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    public unpackAPIData<T, Y>(packed: APIData<T>[] | APIData<T>,
        type: { new(data): Y; }, callback: (T, number?, Array?) => void, thisArg?: any): void {
        if (Array.isArray(packed)) {
            packed.forEach(function (value, index, array) {
                this.unpackAPIData(value, type, callback, thisArg);
            }, this
            );
        } else {
            if (Array.isArray(packed.data)) {
                // TODO Check for non-array data
                packed.data.forEach(function (value, index, array) {
                    // Converts data into an object and then passes to callback
                    callback.call(this, ObjectCreator.createEntity(type, value), index);
                }, thisArg);

            } else {

            }
        }
    }


}

/*
Object for containing data returned from the API
*/
export class APIData<T> implements APIInterface<T> {
    data: T;

    constructor(options: {
        data?: T
    }) {
        this.data = options.data;
    }

}

export interface APIInterface<T> {
    data: T;
}

export class ObjectCreator<T> {
    constructor(private testType: new (data: any) => T) {

    }

    static createEntity<TEntity>(type: { new(data): TEntity; }, data: any): TEntity {
        return new type(data);
    }

    getNew(data: any): T {
        return new this.testType(data);
    }
}
