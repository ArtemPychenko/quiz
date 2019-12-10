import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent {

  question = {};
  // tslint:disable-next-line:semicolon
  questions
  constructor(private api: ApiService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    console.log('on init');
    this.api.getQuestions().subscribe(res => {
      this.questions = res;
    });
  }

  post(question) {
    this.api.postQuestion(question);
  }
}
