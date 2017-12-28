import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { QuestionBase } from '../_Objects/Forms/question-base';
import { TextBoxQuestion } from '../_Objects/Forms/question-textbox';
import { DropDownQuestion } from '../_Objects/Forms/question-dropbox';
import { LogService } from './log.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class QuestionControlService {

    constructor(private http: HttpClient, private log: LogService) { }

    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getQuestions(url:string): Observable<QuestionBase<any>[]> {
        return this.http.get<QuestionBase<any>[]>(url).
            pipe(
            tap(questions => this.log.log("fetched questions")),
            catchError(this.log.handleError('getQuestions', []))
            ); 
    }



    toFormGroup(obsQuestions: Observable<QuestionBase<any>[]>): FormGroup {
        let group: any = {};
        obsQuestions.subscribe( questions => questions.forEach(question =>
        {
            group[question.key] = question.required ?

                new FormControl(question.value || '', Validators.required) :
                new FormControl(question.value || '');
        }));
        return new FormGroup(group);
    }
}