import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
   declarations: [
      AppComponent,
      QuestionComponent,
      QuestionsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatInputModule,
      MatCardModule,
      FormsModule,
      MatListModule
   ],
   providers: [ApiService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
