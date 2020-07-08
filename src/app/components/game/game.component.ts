import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  myScore: number = 0;
  computerScore: number = 0;
  myChoice: string;
  computerChoice: string;
  computerOptions: Array<string> = ['rock', 'paper', 'scissors'];
  computerNumber: number;
  resultLabel: string = "Let's Play!!"
  playerChoiceImage: string = "rock";
  computerChoiceImage: string = "rock";

  constructor() { }

  buttonClicked(buttonName) {
    this.playerChoiceImage = "rock";
    this.computerChoiceImage = "rock";
    this.computerNumber = Math.floor(Math.random() * 3);
    this.myChoice = buttonName;
    Array.from(document.getElementsByClassName('player-image') as HTMLCollectionOf<HTMLElement>)[0].style.animation = "shakeUser 2s ease";
    Array.from(document.getElementsByClassName('computer-image') as HTMLCollectionOf<HTMLElement>)[0].style.animation = "shakeComputer 2s ease";
    setTimeout(() => {
      this.playerChoiceImage = buttonName;
      this.computerChoice = this.computerOptions[this.computerNumber];
      this.computerChoiceImage = this.computerChoice;
      this.compareHands(this.myChoice, this.computerChoice)
      Array.from(document.getElementsByClassName('player-image') as HTMLCollectionOf<HTMLElement>)[0].style.animation = "";
      Array.from(document.getElementsByClassName('computer-image') as HTMLCollectionOf<HTMLElement>)[0].style.animation = "";
    }, 2000);
  }
  compareHands(myChoice, computerChoice) {
   
    if (myChoice === computerChoice) {
      this.resultLabel = "It's a Tiee!!"
    }
    if (myChoice === 'rock') {
      if (computerChoice === 'scissors') {
        this.resultLabel = "You win!! Yay!!"
        this.myScore++;
      } else if (computerChoice === 'paper') {
        this.resultLabel = "You lose!! Sed Lyf!!"
        this.computerScore++;
      }
    }
    if (myChoice === 'paper') {

      if (computerChoice === 'rock') {
        this.resultLabel = "You win!! Yay!!"
        this.myScore++;
      } else if (computerChoice === 'scissors') {
        this.resultLabel = "You lose!! Sed Lyf!!"
        this.computerScore++;
      }
    }
    if (myChoice === 'scissors') {
      if (computerChoice === 'paper') {
        this.resultLabel = "You win!! Yay!!"
        this.myScore++;
      } else if (computerChoice === 'rock') {
        this.resultLabel = "You lose!! Sed Lyf!!"
        this.computerScore++;
      }
    }
  }
}

