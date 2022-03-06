import React, { Component } from 'react';

export default class rps extends Component {
	constructor(props) {
        super(props);
		this.state = {
			userChoice : "",
			computerChoice : "",
			result : "",
			computerScore: 0,
			userScore: 0
		}
		
		this.possibleChoices = ["rock","paper","scissors"]
    }

	
	userChoice = (e) => {
		this.getComputerChoice(e)
		};
	
	getComputerChoice = (user) => {
		const randomNumber = Math.floor(Math.random() * this.possibleChoices.length)
		const computerChoice = this.possibleChoices[randomNumber]
		this.getResult(user, computerChoice)
	};
	
	getResult = (user, comp) => {
		let  result = ""
		if (user === comp) {
			result = "It's a draw";
			this.setState({result : result,userChoice: user, computerChoice:comp})
		}else if(
			(user === 'rock' && comp === 'paper') 
			|| (user === 'paper' && comp === 'scissors')
			|| (user === 'scissors' && comp === 'rock')) {
			result = 'You lose :(';
			this.setState({result : result,userChoice: user, computerChoice:comp, computerScore:this.state.computerScore+1})
		}else{
			result = 'You win!';
			this.setState({result : result,userChoice: user, computerChoice:comp, userScore:this.state.userScore+1})
		}
	};

  	render() {
		return (
			<div> 
				<h2>Computer Choice: {this.state.computerChoice}<span id="computer-choice"></span></h2>
				<h2>Your Choice: {this.state.userChoice} <span id="user-choice"></span></h2>
				<h2>Result: {this.state.result}<span id="result"></span></h2>
				<div className='group'>
					<button id="rock" onClick={(e) => {this.userChoice("rock")}}>Rock</button>
					<button id="paper" onClick={(e) => {this.userChoice("paper")}}>Paper</button>
					<button id="scissors" onClick={(e) => {this.userChoice("scissors")}}>Scissors</button>
				</div>
				<div className='group'>
					<h2>Your Score: {this.state.userScore}</h2>
					<h2>Computer Score: {this.state.computerScore}</h2>
				</div>
			</div>
		);
  	}
}
