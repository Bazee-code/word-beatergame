// all of our js will be written here!
window.addEventListener('load',(init));
	// load event fires when entire html doc has loaded
	// create levels for our game
	const levels ={
		easy : 5,
		medium : 3,
		hard : 1
	};	

	// set game current level
	let currentLevel = levels.medium;

	// we init our global vars
	let time = currentLevel;
	let score = 0;
	let isPlaying;
	let randIndex;

	// select our DOM elements
	const seconds = document.getElementById('seconds');
	const userInput = document.querySelector('.user-input');
	const message = document.querySelector('#start-game');
	const timeLeft = document.querySelector('#time-left');
	const gameScore = document.getElementById('score');
	const typedWord = document.querySelector('.typed-word');

	// create our array of words that we'll loop through
	const words = ["ability","able","aboard","about","above","accept","accident","according",
	"black","blank","blanket","blew","blind","block","blood","blow",
	 "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
	 "mysterious","nails","name","nation","national","native","natural","naturally",
	 "shoe","shoot","shop","shore","short","shorter","shot","should",
	 "swept","swim","swimming","swing","swung","syllable","symbol","system",
	 "treated","tree","triangle","tribe","trick","tried","trip","troops"];

	 // initialize game
	 function init(){
	 	// show user how many seconds to type depndng on level
	 	seconds.textContent = currentLevel;
	 	// all our func will be initialized here
	 	loadArray(words);
	 	// setInterval func is a func that can be used to set after how long a func can be called
	 	setInterval(countDown,1000);
	 	// check status of game
	 	setInterval(checkStatus,50);
	 	// start getting user input
	 	// we will add an event listener to our input area
	 	userInput.addEventListener('input',getInput);
	 	// the input event fires when the input value of our input area is changed
	 }

	 // create function to load our array
	 function loadArray(words){
	 	// generate random index
	 	randIndex = Math.floor(Math.random()*words.length);
	 	// use index to output random word
	 	// console.log(words[randIndex]);
	 	typedWord.textContent = words[randIndex];
	 };

	 // function for our timer
	 function countDown(){
	 	if(time > 0){
	 		// decrease time
	 		time--;
	 		
	 	}
	 	else if (time === 0){
	 		// game over
	 		isPlaying = false;
	 	}
	 	
	 	// show time
	 	timeLeft.textContent = time;
	 };

	function checkStatus(){
		if(!isPlaying && time === 0){
			message.textContent = "Game Over!";
			score = -1; //first word doesnt count
		}
	};

	// get user input from input area 
	function getInput(){
		// compare userinput 
		if(matchWords()){
			// console.log('Match')
			isPlaying = true;
			// change the word to be typed next
			loadArray(words); 
			// change our score
			score++;
			// reset time counter
			time = currentLevel;
			// clear user input
			userInput.value = '';

		}
		else{
			// console.log("Doesn't match!");
			isPlaying = false;
			
		}
		// console.log(userInput.value);
		// instead of displaying -1 we want to display 0
		if(score === -1){
			gameScore.textContent = 0;
		}else{
			gameScore.textContent = score;
		}
		
	}

	function matchWords(){
		if(userInput.value === words[randIndex]){
				message.textContent = "Correct!";
				return true;
			}
		else{
				message.textContent = "Game in progress...";
				return false;
			}
	}