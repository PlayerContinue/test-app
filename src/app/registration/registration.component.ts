import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { QuestionBase } from '../_Objects/Forms/question-base';
import { QuestionControlService } from '../_Services/question-control.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    providers: [QuestionControlService],
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    obsQuestions: Observable<QuestionBase<any>[]>;
    @Input() questions:QuestionBase<any>[][];
    form: FormGroup;
    payLoad = '';
    constructor(private qcs: QuestionControlService) {

    }

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions() : void{
        this.form = this.qcs.getDefaultFormGroup;
        this.questions = this.qcs.getDefaultQuestions;
        this.obsQuestions =  this.qcs.getQuestions("/api/registration");
        this.obsQuestions.subscribe(questions =>
                 this.makeQuestions(questions)
            );
        
    }

    /**
     * Make the questions list from the current list
     * @param questions 
     */
    makeQuestions(questions:QuestionBase<any>[]){
        this.form = this.qcs.toFormGroup(questions);
        //Sort all the questions into rows

        for(var i=0;i<questions.length;i++){
            if(typeof this.questions[questions[i].row.toString()] === "undefined"){
                this.questions[questions[i].row.toString()] = [];
            }
            this.questions[questions[i].row.toString()].push(questions[i]);
        }

        for(var i=0;i<this.questions.length;i++){
            this.questions[i].sort((a,b) => a.order - b.order);
        }

        /*questions.forEach(question => (function(){
            if(typeof this.questions[question.row] === "undefined"){
                this.questions[question.row] = [];
            }
            this.questions[question.row][question.order] = question;
        })  
        );*/
        
    }



    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}
