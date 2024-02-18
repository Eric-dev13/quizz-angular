import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/interfaces/category.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-form-custom-quiz',
  templateUrl: './form-custom-quiz.component.html',
  styleUrls: ['./form-custom-quiz.component.scss']
})
export class FormCustomQuizComponent implements OnInit {

  numberOfQuestions: number = 10; // Valeur par défaut

  categories!: Category[];

  selectedCategories: number[] = [];

  

  	// EMETTRE : Émission d'un événement de l'enfant vers le parent
	@Output() customGameQuizz: EventEmitter<FormData> = new EventEmitter<FormData>();

  constructor(private categorService: CategoryService, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.findAllCategories();
  }

  findAllCategories = () => {
    this.categorService.findAll().subscribe({
      next: (categoriesData) => {
        this.categories = categoriesData;      
      },
      error: err => {
        console.log("Erreur dans categories");
      }
    })
  }

  startCustomQuiz(customQuizForm: NgForm) {
    let formData = new FormData();
    formData.append("limit", this.numberOfQuestions.toString());
    formData.append("categories",customQuizForm.value.categories);
    const userId :string | undefined = this.authService.getUser()?.id?.toString();
    if(userId) {
      formData.append("playerId", userId);
    }
    this.customGameQuizz.emit(formData);
  }
}
