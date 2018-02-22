import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { QuestionBase } from '../_Objects/Forms/question-base';
import { QuestionControlService } from '../_Services/question-control.service';
import { ApiDataService, APIData } from '../_Services/apiDataService.service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  obsQuestions: Observable<APIData<QuestionBase<any>[]>[]>;
  form: FormGroup;
  payLoad = '';
  formList: { [key: string]: AbstractControl } = {};
  @Input() questions: QuestionBase<any>[][];
  @Input() action: string; // The url to post the results to
  @Input() onsubmit = function () { }; // callback function for onsubmit. Default set in case one is not passed in




  constructor(private qcs: QuestionControlService, private dataService: ApiDataService) {

  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.form = this.qcs.getDefaultFormGroup;
    this.questions = this.qcs.getDefaultQuestions;
    this.obsQuestions = this.qcs.getQuestions(this.action);
    this.obsQuestions.subscribe(questions =>
      (this.dataService.unpackAPIData(questions, QuestionBase, this.makeQuestions, this).then(this.postMakeQuestions.call(this))
    ));

  }

  private postMakeQuestions(): void {
    this.form = new FormGroup(this.formList);
    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].sort((a, b) => a.order - b.order);
    }

    /*questions.forEach(question => (function () {
      if (typeof this.questions[question.row] === 'undefined') {
        this.questions[question.row] = [];
      }
      this.questions[question.row][question.order] = question;
    })
    );*/
  }

  /**
   * Make the questions list from the current list
   * @param questions - The list of questions to display
   */
  makeQuestions(questions: QuestionBase<any>) {
    this.qcs.toFormGroup(questions, this.formList);
    // Sort all the questions into rows

    // Create rows from the row value
    if (typeof questions.row !== 'undefined') {
        if (typeof this.questions[questions.row.toString()] === 'undefined') {
          this.questions[questions.row.toString()] = [];
        }
        this.questions[questions.row.toString()].push(questions);
      }

  }

  /**
    * Set the classes of the question depending on the current position
    * @param question: Current question being created
    * @param questionsList: List of current questions in the current row
    */
  private getQuestionClasses(question: QuestionBase<any>, questionsList: QuestionBase<any>[]): String {
    let classes = 'form-group';

    if (typeof question.classOverride === 'undefined' || question.classOverride === '') {// No override classes provided, use default
      // No class needed for single item, so skipped
      switch (questionsList.length) {
        case 1:
          classes += ' col-md-12';
          break;
        case 2:
          classes += ' col-md-6';
          break;
        case 3:
          classes += ' col-md-4';
      }
    } else {// Class Override provided, use override classes
      classes += ' ' + question.classOverride;
    }

    return classes;

  }



  onSubmit() {

    if (this.form.valid) {
      this.onsubmit();

      this.payLoad = JSON.stringify(this.form.value);
    } else {
      // Mark the form as dirty
      this.form.markAsDirty();
    }
  }

}
