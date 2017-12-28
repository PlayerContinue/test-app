"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var question_control_service_1 = require("../_Services/question-control.service");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(qcs) {
        this.qcs = qcs;
        this.payLoad = '';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.questions = this.qcs.getQuestions("/api/registration");
        this.form = this.qcs.toFormGroup(this.questions);
    };
    RegistrationComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Observable_1.Observable)
    ], RegistrationComponent.prototype, "questions", void 0);
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            providers: [question_control_service_1.QuestionControlService],
            styleUrls: ['./registration.component.css']
        }),
        __metadata("design:paramtypes", [question_control_service_1.QuestionControlService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map