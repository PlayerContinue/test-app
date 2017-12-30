import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../_Objects/Forms/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
    //Allowed Question Types: dropdown,textbox,select
    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }

}
