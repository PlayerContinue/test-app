﻿import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';


@Injectable()
export class LogService {
    constructor(private messageService: MessageService) { }

    /**
     * Log a message to the console
     * @param message - The message to log
     */
    public log(message: string) {
        this.messageService.add(message);
    }

    /**
     * The name of the operation called
     * @param operation - The operation called
     * @param result - The results of the operation
     */
    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
