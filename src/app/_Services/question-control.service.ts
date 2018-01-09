import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
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

    constructor(private http: HttpClient, private log: LogService, private router:ActivatedRoute) { }

    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getQuestions(url:string): Observable<QuestionBase<any>[]> {
        return this.http.get<QuestionBase<any>[]>(url).
            pipe(
            tap(questions => this.log.log("fetched questions")),
            catchError(this.log.handleError('getQuestions', []))
            ); 
    }

get getDefaultQuestions():QuestionBase<any>[][]{
    return [[]];
}

/**
 * Creates a default form group for use before the data is loaded
 */
    get getDefaultFormGroup():FormGroup{
        return this.toFormGroup(this.getDefaultQuestions[0]);
    }

    toFormGroup(questions: QuestionBase<any>[] ) {
        let group: any = {};
    
        questions.forEach(question => {
          group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                                  : new FormControl(question.value || '');
        });
        return new FormGroup(group);
      }

    

      /**
       * Submit the data to a specific url point
       * @param form - The form from whose data is to be submitted
       */
    submitForm(form:FormGroup,postURL?:string):Observable<FormGroup>{
        if(!postURL){
            postURL = '/api/' + this.router;
        }
        //TODO Make submission work as expected
        return this.http.post<FormGroup>(postURL,JSON.stringify(form.value),httpOptions).pipe(
            tap(_ => this.log.log(`submitted form with data ${JSON.stringify(form.value)}`)),
            catchError(this.log.handleError<any>('submitForm'))
        );
        
    }
}