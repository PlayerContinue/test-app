﻿import { Component, Input, OnInit } from '@angular/core';
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
    @Input() questions: Observable<QuestionBase<any>[]>;
    form: FormGroup;
    payLoad = '';
    constructor(private qcs: QuestionControlService) {

    }

    ngOnInit() {
        this.questions = this.qcs.getQuestions("/api/registration");
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}
