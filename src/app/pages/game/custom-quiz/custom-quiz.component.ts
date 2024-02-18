import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Answers } from 'src/app/interfaces/answers.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-custom-quiz',
  templateUrl: './custom-quiz.component.html',
  styleUrls: ['./custom-quiz.component.scss']
})
export class CustomQuizComponent {

  gameData: any;
  showResults: boolean = false;
  currentQuestionIndex: number = 0;
  userAnswers: number[] = [];
  score: number = 0;
  customHidden: boolean = false;

  constructor(private gameService: GameService, private router: Router) { }

  // Retourne une partie personnalisée, l'utilisateur choisi le nombre et les catégories des questions.
  findCustom = (formData: FormData) => {
    // Générer un quiz personnalisé en fonction des paramètres.
    this.gameService.generateCustomQuiz(formData).subscribe({
      next: (customData) => {
        console.log("custom-quizz: ", customData);
        this.customHidden = true;
        this.gameData = customData;
      }
    });
  }

  selectAnswer(answerIndex: number) {
    this.userAnswers[this.currentQuestionIndex] = answerIndex;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.gameData.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      // Vous avez atteint la fin du quiz, vous pouvez gérer les résultats ici
      console.log('Résultats:', this.userAnswers);
      this.calculateScore();
      this.showResults = true;
    }
  }

  calculateScore() {
    // Calculer le score en comparant les réponses de l'utilisateur avec les bonnes réponses
    this.score = 0;

    for (let i = 0; i < this.gameData.questions.length; i++) {
      const correctAnswerIndex = this.gameData.questions[i].answers.findIndex((answers: Answers) => answers.correct === true);

      // Comparer la réponse de l'utilisateur avec la bonne réponse
      if (this.userAnswers[i] === correctAnswerIndex) {
        this.score++;
      }
    }
  }
}

