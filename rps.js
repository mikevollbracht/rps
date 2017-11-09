//Set initial variables

var games_played = 0; 
		var user_score = 0;
		var cpu_score = 0;
		var rock = "Rock";
		var paper = "Paper"
		var scissors = "Scissors"
		
//Pass in the value based on the button that is pushed on the screen
function game(weapon_value) {
	//gets random computer choice for weapon
	var possible_computer = ["Rock", "Paper", "Scissors"];
	var computer_weapon = possible_computer[Math.floor(Math.random() * possible_computer.length)];
	//sets user weapon to the weapon passed in by the function, might not even need this
	// just use weapon_value instead
	var user_weapon = weapon_value;
	//initializes result
	var result;

	//checks for a tie
	if (user_weapon === computer_weapon) {
		result = "Tie";
		games_played++;
	}//Winning condition for user = rock
	 else if (user_weapon == "Rock" && computer_weapon == "Scissors") {
		result = "Congrats - You Won!";
		games_played++;
		user_score++;
	} //Winning condition for user = paper
	else if (user_weapon == "Paper" && computer_weapon == "Rock") {
		result = "Congrats - You Won!";
		games_played++;
		user_score++;
	} //Winning condition for user = scissors
	else if (user_weapon == "Scissors" && computer_weapon == "Paper") {
		result = "Congrats - You Won!";
		games_played++;
		user_score++;
	} //Catch all for user loss
	else {
		result = "Bummer - You Lost!",
		games_played++;
		cpu_score++;
	}
	
	//writing results to the screen
	document.getElementById('player_choice').innerHTML = user_weapon;
	document.getElementById('cpu_choice').innerHTML = computer_weapon;
	document.getElementById('result').innerHTML = result;
	document.getElementById('games').innerHTML = games_played;
	document.getElementById('user_score').innerHTML = user_score;
	document.getElementById('cpu_score').innerHTML = cpu_score;
};