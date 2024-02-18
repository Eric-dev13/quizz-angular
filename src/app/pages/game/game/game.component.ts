import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/interfaces/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit{

  gameData: any;
  currentQuestionIndex: number = 0;
  userAnswers: number[] = [];
  showResults: boolean = false;
  score: number = 0;


  constructor(private gameService: GameService, private router: ActivatedRoute) {}

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get("id");
    console.log("id", id);
    this.findById(id);
  }

  findById = (id: string|null) => {
    this.gameService.findById(id).subscribe({
      next: (gameData) => {
        this.gameData = gameData;
      }
    })
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
    this.score = 0;

    for (let i = 0; i < this.gameData.questions.length; i++) {
      const correctAnswerIndex = this.gameData.questions[i].answers.findIndex((answer: { correct: boolean }) => answer.correct);

      if (this.userAnswers[i] === correctAnswerIndex) {
        this.score++;
      }
    }
  }

  getAnswerComment(index: number): string {
    const userAnswerIndex = this.userAnswers[index];
    const correctAnswerIndex = this.gameData.questions[index].answers.findIndex((answer: { correct: boolean }) => answer.correct);

    if (userAnswerIndex === correctAnswerIndex) {
      return 'Bonne réponse!';
    } else {
      return `Mauvaise réponse. La bonne réponse était : ${this.gameData.questions[index].answers[correctAnswerIndex].title}`;
    }
  }

}
