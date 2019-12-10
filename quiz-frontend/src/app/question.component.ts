import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

  question = {}

  constructor(private api: ApiService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    console.log('question on init');
    this.api.questionSelected.subscribe(question => this.question = question);
  }

  post(question) {
    this.api.postQuestion(question);
  }
}
