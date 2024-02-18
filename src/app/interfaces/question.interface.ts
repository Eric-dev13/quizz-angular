import { Answers } from "./answers.interface";
import { Category } from "./category.interface";
import { Game } from "./game.interface";

export interface Question {
    id: number;
    title: string;
    categories: Category[];
    games: Game[];
    answers: Answers[];
}
