import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.scss']
})
export class GameBoxComponent implements OnInit {
  gameOptions = [{
		id: 0,
		name:'rock',
		url: 'https://cs.wellesley.edu/~mhardy2/protected/hw8/images/rock.png'
   },
   {
		id: 1,
		name: 'paper',
		url: 'https://cs.wellesley.edu/~mhardy2/protected/hw8/images/paper.png'
  },
  {
		id: 2,
		name: 'scissors',
		url: 'https://cs.wellesley.edu/~mhardy2/protected/hw8/images/scissors.png'
  }]
  gameMode = 'cc';
  roundResults = []
  roundNumber = 1
  selectedOption = {
	id: 0,
	name:'',
	url: ''
  }
  selectedComputerOption = {
	id: 0,
	name:'',
	url: ''
  }
  showWin = false
  showLose = false
  showDraw = false
  results = {
	userWins: 0,
	computerWins: 0,
	draws: 0
  }

  ngOnInit() {
	if (history.state.data) {
		this.roundResults = history.state.data
		this.results.userWins = history.state.points1Total
		this.results.computerWins = history.state.points2Total
		this.results.draws = history.state.pointsDrawTotal
		this.roundNumber = this.roundResults[this.roundResults.length - 1].roundNumber + 1
	}
  }
  selectOption(option){    
    this.selectedOption = option
    setTimeout( () => {
	  this.selectedComputerOption = this.gameOptions[Math.floor(Math.random() * this.gameOptions.length)];
	  this.calculateResult()
	  this.roundNumber += 1
	},  100);
  }   
  calculateResult() {
	if (this.selectedOption && this.selectedComputerOption) {
		if ((this.selectedOption.id - this.selectedComputerOption.id + 3)% 3 == 1) {
			this.results.userWins += 1
			this.saveResult(1,0,0)
			this.showResult(1)
		} else if(this.selectedOption.id == this.selectedComputerOption.id) {
			this.results.draws += 1
			this.saveResult(0,0,1)
			this.showResult(3)
		}
		else {
			this.results.computerWins += 1
			this.saveResult(0,1,0)
			this.showResult(2)
		}
	}	
  }
  showResult (status) {
	  if (status === 1) {
		  this.showWin = true
	  } else if (status === 2) {
		  this.showLose = true
	  } else if (status === 3) {
		  this.showDraw = true
	  }
	  setTimeout( () => {
		  this.showWin = false
		  this.showLose = false
		  this.showDraw = false
	  }, 1000)
  }
  saveResult (p1, p2, d) {
	this.roundResults.push({ roundNumber: this.roundNumber, playerOneResult: p1, playerTwoResult: p2, draws: d})
  }
  playCC () {
	this.selectedOption = this.gameOptions[Math.floor(Math.random() * this.gameOptions.length)];
	this.selectedComputerOption = this.gameOptions[Math.floor(Math.random() * this.gameOptions.length)];
	this.calculateResult()
	this.roundNumber += 1
  } 
}
