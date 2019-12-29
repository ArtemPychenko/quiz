import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {

  quiz = {};
  // tslint:disable-next-line:semicolon
  quizzes
  constructor(private api: ApiService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    console.log('on init');
    this.api.getQuizzes().subscribe(res => {
      this.quizzes = res;
    });
  }
}
