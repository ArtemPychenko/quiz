import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

  question = {};
  quizId;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.questionSelected.subscribe(question => this.question = question);
  }

  post(question) {
    question.quizId = this.quizId;
    this.api.postQuestion(question);
  }
}
