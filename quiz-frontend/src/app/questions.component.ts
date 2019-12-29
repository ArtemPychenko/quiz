import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent {

  question = {};
  // tslint:disable-next-line:semicolon
  questions
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(quizId).subscribe(res => {
      this.questions = res;
    });
  }
}
