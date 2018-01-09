import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { QuestionBase } from '../_Objects/Forms/question-base';
import { QuestionControlService } from '../_Services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  obsQuestions: Observable<QuestionBase<any>[]>;
  @Input() questions:QuestionBase<any>[][];
  @Input() action:string;//The url to post the results to
  @Input() onsubmit = function(){}; //callback function for onsubmit. Default set in case one is not passed in
  


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
      this.obsQuestions =  this.qcs.getQuestions(this.action);
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

      //Create rows from the row value
      for(var i=0;i<questions.length;i++){
        if(typeof questions[i].row !== "undefined"){
          if(typeof this.questions[questions[i].row.toString()] === "undefined"){
              this.questions[questions[i].row.toString()] = [];
          }
          this.questions[questions[i].row.toString()].push(questions[i]);
        }
        }


      for(var i=0;i<this.questions.length;i++){
          this.questions[i].sort((a,b) => a.order - b.order);
      }

      questions.forEach(question => (function(){
          if(typeof this.questions[question.row] === "undefined"){
              this.questions[question.row] = [];
          }
          this.questions[question.row][question.order] = question;
      })  
      );
      
  }

   /**
     * Set the classes of the question depending on the current position
     * @param question: Current question being created
     * @param questionsList: List of current questions in the current row
     */
    private getQuestionClasses(question:QuestionBase<any>, questionsList:QuestionBase<any>[]):String{
        var classes = "form-group";      
        
        if(typeof question.classOverride === "undefined" || question.classOverride == ''){//No override classes provided, use default
          //No class needed for single item, so skipped
        switch(questionsList.length){
            case 1:
            classes += " col-md-12";
            break;
          case 2:
            classes += " col-md-6";
            break;
          case 3:
            classes += " col-md-4"
        }
      }else{//Class Override provided, use override classes
        classes += " " + question.classOverride;
      }
  
        return classes;
  
      }



  onSubmit() {
      
    if(this.form.valid){
          this.onsubmit();
        
          this.payLoad = JSON.stringify(this.form.value);
      }else{
          //Mark the form as dirty
         this.form.markAsDirty();
      }
  }

}
