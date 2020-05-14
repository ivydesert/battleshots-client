import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../models/GameInfoModel';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	game: GameInfo = new GameInfo({_id: "noturmommasvodka"}); //test

	constructor() { }

	ngOnInit(): void {
	}

}
