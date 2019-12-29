import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {

  quiz = {}

  constructor(private api: ApiService) {}

  ngOnInit() {
    console.log('quiz on init');
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }
}
