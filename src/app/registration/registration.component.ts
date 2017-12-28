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
    @Input() questions:QuestionBase<any>[];
    form: FormGroup;
    payLoad = '';
    constructor(private qcs: QuestionControlService) {

    }

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions() : void{
        this.obsQuestions =  this.qcs.getQuestions("/api/registration");
        this.obsQuestions.subscribe(questions => 
            this.questions = questions
        );

        this.obsQuestions.subscribe(questions => this.form = this.qcs.toFormGroup(questions));
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}
