import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question.interface';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-detail-result',
  templateUrl: './game-detail-result.component.html',
  styleUrls: ['./game-detail-result.component.scss']
})
export class GameDetailResultComponent implements OnInit {
  
  @Input() question!: Question;
  @Input() questionIndex!: number;
  @Input() userAnswersIndex!: number;

  faThumbsUp=faThumbsUp;
  faThumbsDown=faThumbsDown;

    answersValidText!:string;

  ngOnInit(): void {
    this.answersValidText = this.getAnswersValidText();
  }

  // Renvoie la bonne reponse 
  getAnswersValidText = (): string => {
    for (let index = 0; index < this.question.answers.length; index++) {
      const answer = this.question.answers[index];

      if(answer.correct) {
        console.log("Answers : ", answer);
        return answer.title;
      }
    }
    return ''
  }
}
