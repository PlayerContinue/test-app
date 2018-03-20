import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { EventData } from '../_Objects/eventData';
import { LogService } from './log.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://thirdtimesacharm.us-west-2.elasticbeanstalk.com'
    })
};
@Injectable()
export class ApiDataService {

    constructor(private http: HttpClient, private log: LogService) { }


    submitData(url: string, body: any): Observable<any> {
        return this.http.post<any>(url, body).pipe(catchError(this.log.handleError('submitData', [])));
    }

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
        type: { new(data): Y; }, callback: (T, number?, Array?) => void, thisArg?: any): Promise<{}> {
        if (Array.isArray(packed)) {
            packed.forEach(function (value, index, array) {
                this.unpackAPIData(value, type, callback, thisArg);
            }, this
            );
        } else {
            return this.unpackAPIDataSync(packed, type, callback, thisArg);
        }
    }

    private unpackAPIDataSync<T, Y>(packed: APIData<T>,
        type: { new(data): Y; }, callback: (T, number?, Array?) => void, thisArg?: any): Promise<{}> {
        return new Promise(function (resolve, reject) {
            if (Array.isArray(packed.data)) {
                packed.data.forEach(function (value, index, array) {
                    // Converts data into an object and then passes to callback
                    callback.call(thisArg, ObjectCreator.createEntity(type, value), index, array);
                }, thisArg);
            } else {
                callback.call(thisArg, ObjectCreator.createEntity(type, packed.data), 0, [packed.data]);
            }
            resolve();
        });
    }

    /**
        * Upacks data provided from the API Aycnronously
        * @param packed - The APIData object containing the list of data
        * @param type - The type of data contained in the data segment
        * @param callback - The function on what to do with the data after it has been turned into
        *  it's object, please note must be asyncrounous and it must call resolve at the end
        * @param thisArg - An object to which the this keyword
        * can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
    public unpackAPIDataAsync<T, Y>(packed: APIData<T>[] | APIData<T>,
        type: { new(data): Y; },
        callback?: (T, number?, Array?) => void,
        thisArg?: any): Promise<{ object: Y }>[] {
        if (Array.isArray(packed)) {
            packed.forEach(function (value, index, array) {
                this.unpackAPIDataAsync(value, type);
            }, this
            );
        } else {
            if (Array.isArray(packed.data)) {

                // Run the array asynchrounasely to call the function
                return packed.data.map((item, index, array) => {
                    return new Promise((resolve) => {
                        if (callback) {
                            callback.call(this, ObjectCreator.createEntity(type, item), index, array);

                        }
                        resolve({ object: ObjectCreator.createEntity(type, item) });

                    });

                });
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
