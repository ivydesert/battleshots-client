import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'input-game-start',
	templateUrl: './input-game-start.component.html',
	styleUrls: ['./input-game-start.component.css']
})
export class InputGameStartComponent implements OnInit {
	submitted: boolean = false;
	registered: boolean = false;
	gameStartForm: FormGroup;

	constructor(private formBuilder: FormBuilder,
				private http: HttpClient,
				private router: Router) {
	}

	invalidGameCode(): boolean {
		return (this.submitted && this.gameStartForm.controls.game_code.errors != null);
	}

	ngOnInit(): void {
		this.gameStartForm = this.formBuilder.group({
			game_code: ['']
		});
	}

	onSubmit(): void {
		this.submitted = true;
		const gameCode: string = this.gameStartForm?.value?.game_code;
		const uri = '/game/' + gameCode ?? '';

		// if(gameCode) {
		this.http.post(uri, {}).subscribe((data: any) => {
			let path = data._id;
			this.router.navigate([path]);
		});

		console.log(this.gameStartForm.value);
		this.registered = true;
		// } else {
			// this.http.post('/game', {}).subscribe((data: any) => {

			// })
		// }

		// if(this.gameStartForm.invalid === true) {
			// return
		// } else {
			// if(this.gameStartForm.value) {
				
			// }

			
		// }
	}

}
