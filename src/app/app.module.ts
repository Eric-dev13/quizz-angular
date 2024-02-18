import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';  // Gestion de formulaire lié a ngModel

import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GamesComponent } from './pages/game/games/games.component';
import { GameComponent } from './pages/game/game/game.component';
import { GameFormComponent } from './pages/game/game-form/game-form.component';

import { QuestionsComponent } from './pages/question/questions/questions.component';
import { QuestionComponent } from './pages/question/question/question.component';
import { QuestionFormComponent } from './pages/questions/question-form/question-form.component';

import { CategoriesComponent } from './pages/category/categories/categories.component';
import { CategoryComponent } from './pages/category/category/category.component';
import { CategoryFormComponent } from './pages/category/category-form/category-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormCustomQuizComponent } from './components/form-custom-quiz/form-custom-quiz.component';
import { CustomQuizComponent } from './pages/game/custom-quiz/custom-quiz.component';
import { GameDetailResultComponent } from './components/game-detail-result/game-detail-result.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';



@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    GameFormComponent,
    QuestionsComponent,
    QuestionComponent,
    QuestionFormComponent,
    CategoryComponent,
    CategoriesComponent,
    CategoryFormComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormCustomQuizComponent,
    CustomQuizComponent,
    GameDetailResultComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
