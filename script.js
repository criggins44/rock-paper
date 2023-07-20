//Rock Paper Scissors

let choicesObject = {
	'rock': {
		'rock' : 'draw',
		'paper': 'lose',
		'scissors' : 'win',
	},
	'paper': {
		'rock' : 'win',
		'paper': 'draw',
		'scissors' : 'lose',
	},
	'scissors': {
		'rock' : 'lose',
		'paper': 'win',
		'scissors' : 'draw',
	}
};
let victory = document.getElementById('winner');

function playerTurn(input){
	const choices = ["rock", "paper", "scissors"];
	let num = Math.floor(Math.random() * 3);
	let computerChoice = choices[num];

	document.getElementById('playerChoice').innerHTML = 'You: ' + input.toUpperCase();
	document.getElementById('computerChoice').innerHTML = 'CPU: ' + input.toUpperCase();
}




