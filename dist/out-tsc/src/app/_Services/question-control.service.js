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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var log_service_1 = require("./log.service");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var QuestionControlService = /** @class */ (function () {
    function QuestionControlService(http, log) {
        this.http = http;
        this.log = log;
    }
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    QuestionControlService.prototype.getQuestions = function (url) {
        var _this = this;
        return this.http.get(url).
            pipe(operators_1.tap(function (questions) { return _this.log.log("fetched questions"); }), operators_1.catchError(this.log.handleError('getQuestions', [])));
    };
    QuestionControlService.prototype.toFormGroup = function (obsQuestions) {
        var group = {};
        obsQuestions.subscribe(function (questions) { return questions.forEach(function (question) {
            group[question.key] = question.required ?
                new forms_1.FormControl(question.value || '', forms_1.Validators.required) :
                new forms_1.FormControl(question.value || '');
        }); });
        return new forms_1.FormGroup(group);
    };
    QuestionControlService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, log_service_1.LogService])
    ], QuestionControlService);
    return QuestionControlService;
}());
exports.QuestionControlService = QuestionControlService;
//# sourceMappingURL=question-control.service.js.map