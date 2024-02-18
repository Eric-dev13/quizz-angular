import { Category } from "./category.interface";
import { Player } from "./player.interface";
import { Question } from "./question.interface";

export interface Game {
    id: number;
    createdAt: Date;
    score: number;
    player: Player;
    playerId: number;
    title: string;
    categories: Category[];
    questions: Question[];
}
