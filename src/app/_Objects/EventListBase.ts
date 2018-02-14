import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {EventData} from '../_Objects/eventData';

export class EventListBase<T> {

    // Observable for storing the event data
    private showEventDetails: Subject<T> = new Subject();

    public addEvent(data: T) {
        this.showEventDetails.next(data);
    }

    public subscribe(func: (e: T) => any) {
        this.showEventDetails.subscribe(func);
    }


}
