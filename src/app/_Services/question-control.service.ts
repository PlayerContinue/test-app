import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { QuestionBase } from '../_Objects/Forms/question-base';
import { TextBoxQuestion } from '../_Objects/Forms/question-textbox';
import { DropDownQuestion } from '../_Objects/Forms/question-dropbox';
import { LogService } from './log.service';
import { ApiDataService, APIData } from '../_Services/apiDataService.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class QuestionControlService {

    constructor(private http: HttpClient, private log: LogService, private dataService: ApiDataService) { }

    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getQuestions(url: string): Observable<APIData<QuestionBase<any>[]>[]> {
        return this.dataService.getData<QuestionBase<any>[]>(url);
    }

    get getDefaultQuestions(): QuestionBase<any>[][] {
        return [[]];
    }

    /**
     * Creates a default form group for use before the data is loaded
     */
    get getDefaultFormGroup(): FormGroup {
        return null;
        // return this.toFormGroup(this.getDefaultQuestions[0]);
    }

    private toFormGroupSingle(question: QuestionBase<any>, formList: { [key: string]: AbstractControl }) {
        return formList[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
            : new FormControl(question.value || '');
    }

    toFormGroup(questions: QuestionBase<any>[] | QuestionBase<any>, formList: { [key: string]: AbstractControl }) {
        if (!Array.isArray(questions)) {
            return this.toFormGroupSingle(questions, formList);
        }
        if (typeof formList === 'undefined') {
            formList = {};
        }
        questions.forEach(question => {
            formList[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(formList);
    }
}
