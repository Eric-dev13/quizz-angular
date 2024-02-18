import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pages/game/game/game.component';
import { GamesComponent } from './pages/game/games/games.component';
import { CategoriesComponent } from './pages/category/categories/categories.component';
import { CategoryComponent } from './pages/category/category/category.component';
import { CategoryFormComponent } from './pages/category/category-form/category-form.component';
import { GameFormComponent } from './pages/game/game-form/game-form.component';
import { QuestionsComponent } from './pages/question/questions/questions.component';
import { QuestionComponent } from './pages/question/question/question.component';
import { QuestionFormComponent } from './pages/questions/question-form/question-form.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomQuizComponent } from './pages/game/custom-quiz/custom-quiz.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';

const routes: Routes = [
  { path: "", component: HomeComponent },

  { path: "quizz/games/custom-quiz", component: CustomQuizComponent },
  { path: "securite/authentification", component: AuthenticateComponent },
  

  { path: "quizz/games", component: GamesComponent }, 
  { path: "quizz/games/:id", component: GameComponent }, 
  { path: "quizz/games/add", component: GameFormComponent }, 
  { path: "quizz/games/update/:id", component: GameFormComponent }, 
  

  { path: "quizz/categories", component: CategoriesComponent }, 
  { path: "quizz/categories/:id", component: CategoryComponent }, 
  { path: "quizz/categories/add", component: CategoryFormComponent }, 
  { path: "quizz/categories/update/:id", component: CategoryFormComponent }, 

  { path: "quizz/questions", component: QuestionsComponent }, 
  { path: "quizz/questions/:id", component: QuestionComponent }, 
  { path: "quizz/questions/add", component: QuestionFormComponent }, 
  { path: "quizz/questions/update/:id", component: QuestionFormComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
