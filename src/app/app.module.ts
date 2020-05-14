import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputGameStartComponent } from './input-game-start/input-game-start.component';
import { GameComponent } from './game/game.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: InputGameStartComponent
  },
  {
    path: ':gameId',
    component: GameComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InputGameStartComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
