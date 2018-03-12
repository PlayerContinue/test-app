import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {DataPass} from '../_Objects/dataPass';
@Injectable()
export class LoadingService {

    // Observable for storing the event data
    private showEventDetails: Subject<DataPass<any, any>> = new Subject();

    public passData(data: DataPass<any, any>) {
        this.showEventDetails.next(data);
    }

    public subscribe(func: (e: DataPass<any, any>) => any) {
        this.showEventDetails.subscribe(func);
    }

}


