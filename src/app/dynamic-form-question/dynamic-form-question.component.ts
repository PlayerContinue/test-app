import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../_Objects/Forms/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
  // Allowed Question Types: dropdown,textbox,select
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Input() questionsList: QuestionBase<any>[];


  /**
   * Check if a question is ready to be displayed
   * @param question - The question to be built
   */
  private checkIfQuestionReady(question: QuestionBase<any>) {
    if (question.key === '') {
      return true;
    }

    if (typeof this.form.controls[question.key] === 'undefined') {
      return true;
    }

  }




  // Check if the question value is valid
  get isValid() {
    if (this.checkIfQuestionReady(this.question)) {
      return true;
    } else {
      return this.form.controls[this.question.key].valid;
    }
  }

  // Check if the question has been touched and is not valid
  get isDirtyAndNotValid() {
    if (this.checkIfQuestionReady(this.question)) {
      return true;
    } else {
      // Not Valid entry and form is dirty
      return !this.form.controls[this.question.key].valid && this.form.dirty;
    }
  }
}
