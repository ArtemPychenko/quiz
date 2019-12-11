import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { ApiService } from './api.service';
import { QuestionsComponent } from './questions.component';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent }
]

@NgModule({
   declarations: [
      AppComponent,
      QuestionComponent,
      QuestionsComponent,
      HomeComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      MatSliderModule,
      MatInputModule,
      MatCardModule,
      FormsModule,
      MatListModule,
      MatToolbarModule,
      MatButtonModule

   ],
   providers: [ApiService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
