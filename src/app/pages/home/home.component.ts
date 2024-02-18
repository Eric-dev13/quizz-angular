import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  numberOfQuestions: number = 5; // Valeur par défaut

  categories!: Category[];

  selectedCategories: number[] = [];

  constructor(private categorService: CategoryService, private gameService: GameService, private router: Router) {}

  ngOnInit(): void { }

}
