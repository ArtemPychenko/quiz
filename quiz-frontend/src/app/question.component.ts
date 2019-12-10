import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

  question = {};
  constructor(private api: ApiService) {}

  post(question) {
    this.api.postQuestion(question);
  }
}
