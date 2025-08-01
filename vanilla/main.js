
/*
=========
PORTFOLIO
=========
*/


console.log('its my portfolio');


/*
========
TILES JS
========
*/


const wrapper = document.getElementById("tiles");

const createTile = (index) => {
	const tile = document.createElement("div");
	tile.classList.add("tile");
	return tile;
};

const createTiles = (quantity) => {
	wrapper.innerHTML = "";

	Array.from(Array(quantity)).map((tile, index) => {
		wrapper.appendChild(createTile(index));
	});
};

const createGrid = () => {
	const size = document.body.clientWidth > 800 ? 80 : 50;
	const columns = Math.floor(document.body.clientWidth / size);
	const tilePixelSize = wrapper.clientWidth / columns;
	const rows = Math.ceil(wrapper.clientHeight / tilePixelSize);

  wrapper.style.setProperty("--columns", columns);
  createTiles(columns * rows);
};

createGrid();
window.onresize = () => createGrid();


/*
=========
NAVBAR JS
=========
*/


// navbar scroll effect
const nav = document.getElementById('navbar');
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
	const currentScrollY = window.scrollY;
	if (currentScrollY > lastScrollY && currentScrollY > 100)
	{
		nav.classList.add('navbar--hidden');
	}
	else {
		nav.classList.remove('navbar--hidden');
	}

	lastScrollY = currentScrollY;
});

// navbar menu
const menuButton = document.getElementById('nav-btn');
const actionMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', (event) => {
	event.stopPropagation(); 
	actionMenu.classList.toggle('hidden');
});

window.addEventListener('click', () => {
	if (!actionMenu.classList.contains('hidden'))
	{
		actionMenu.classList.add('hidden');
	}
});


/*
=========
DRAWER JS
=========
*/


const drawer = document.getElementById('drawer');
const drawerContent = document.getElementById('drawer-content');
const drawerOptions = document.querySelectorAll('.drawer-option');
const themesBtn = document.getElementById('themes-btn');
const chatbotBtn = document.getElementById('chatbot-btn');
const gameBtn = document.getElementById('game-btn');


// show a specific drawer option
const showDrawerOption = (optionIdToShow) => {
	drawerOptions.forEach(option => {
		if (option.id === optionIdToShow)
		{
			option.classList.remove('hidden');
		}
		else {
			option.classList.add('hidden');
		}
	});
};

const openDrawer = (optionId) => {
	actionMenu.classList.add('hidden');
	showDrawerOption(optionId);
	drawer.classList.remove('hidden');

	if (optionId === 'chatbot-option') {
		const chatBody = document.getElementById('chatbot-body');
		setTimeout(() => {			
			chatBody.scrollTop = chatBody.scrollHeight;
		}, 0);
	}
};

const closeDrawer = () => {
	drawer.classList.add('hidden');
};

// menu buttons events
themesBtn.addEventListener('click', (event) => {
	event.stopPropagation();
	openDrawer('themes-option');
});

chatbotBtn.addEventListener('click', (event) => {
	event.stopPropagation();
	openDrawer('chatbot-option');
});

gameBtn.addEventListener('click', (event) => {
	event.stopPropagation();
	openDrawer('game-option');
});

// close the drawer
drawer.addEventListener('click', (event) => {
	if (event.target === drawer) {
		closeDrawer();
	}
});

drawerContent.addEventListener('click', (event) => event.stopPropagation());


// themes
const themeSelectors = document.querySelectorAll('.theme-selector');

const setTheme = (themeName) => {
	document.documentElement.setAttribute('data-theme', themeName);

	themeSelectors.forEach(selector => {
		if (selector.dataset.themeName === themeName) {
			selector.classList.add('active');
		}
		else {
			selector.classList.remove('active');
		}
	});

	localStorage.setItem('theme', themeName);
};

// add click event listeners to each theme
themeSelectors.forEach(selector => {
  selector.addEventListener('click', () => {
    const themeName = selector.dataset.themeName;
    setTheme(themeName);
  });
});

// sync the active button with the theme that was already set
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme);
});

// chatbot
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatSubmitBtn = document.getElementById('chat-submit-btn');
const chatMessagesContainer = document.getElementById('chat-messages');
const chatBody = document.getElementById('chatbot-body'); 

const addMessage = (text, type) => {
	const messageDiv = document.createElement('div');

	messageDiv.classList.add('message', type);
	messageDiv.textContent = text;
	chatMessagesContainer.appendChild(messageDiv);  
	chatBody.scrollTop = chatBody.scrollHeight;
};

// disable / enable the send button
chatSubmitBtn.disabled = true;
chatInput.addEventListener('input', () => {
	if (chatInput.value.trim().length > 0) {
		chatSubmitBtn.disabled = false;
	}
	else {
		chatSubmitBtn.disabled = true;
	}
});

// form submission
chatForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const userMessage = chatInput.value.trim();
	if (userMessage === '') {
		return;
	}

	addMessage(userMessage, 'sent');
	chatInput.value = '';
	chatSubmitBtn.disabled = true;

	// simulate a bot response
	setTimeout(() => {
		addMessage(
			"This is a placeholder response. I'm still under construction!",
			'received'
		);
	}, 1000);
});























/* 
********************************************************************
********************************************************************
********************************************************************
********************************************************************
********************************************************************
********************************************************************
********************************************************************
*/

// game
const gameChoiceBtns = document.querySelectorAll('.game-choice-btn');
const gameResetBtn = document.getElementById('game-reset-btn');
const playerScoreEl = document.getElementById('player-score');
const botScoreEl = document.getElementById('bot-score');
const gameResultTextEl = document.getElementById('game-result-text');

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let botScore = 0;
let isGameActive = true;

const getBotChoice = () => {
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
};

const updateScore = () => {
	playerScoreEl.textContent = playerScore;
	botScoreEl.textContent = botScore;
};

const displayResult = (result, playerChoice, botChoice) => {
	let message = '';
    
	gameResultTextEl.classList.remove('win', 'lose', 'tie');

	switch (result) {
		case 'win':
			message = `You win! ${playerChoice} beats ${botChoice}.`;
			gameResultTextEl.classList.add('win');
			break;
		case 'lose':
			message = `You lose. ${botChoice} beats ${playerChoice}.`;
			gameResultTextEl.classList.add('lose');
			break;
		case 'tie':
			message = `It's a tie! Both chose ${playerChoice}.`;
			gameResultTextEl.classList.add('tie');
			break;
	}

	gameResultTextEl.textContent = message;
};

const playRound = (playerChoice) => {
	if (!isGameActive) return;

	isGameActive = false;

	const botChoice = getBotChoice();
	let result = '';

	if (playerChoice === botChoice) {
		result = 'tie';
	}
	else if (
		(playerChoice === 'rock' && botChoice === 'scissors') ||
		(playerChoice === 'paper' && botChoice === 'rock') ||
		(playerChoice === 'scissors' && botChoice === 'paper')
	)
	{
		result = 'win';
		playerScore++;
	}
	else {
		result = 'lose';
		botScore++;
	}

	updateScore();
	displayResult(result, playerChoice, botChoice);
    
	setTimeout(() => {
		isGameActive = true;
	}, 700);
};

const resetGame = () => {
	playerScore = 0;
	botScore = 0;
	updateScore();
	gameResultTextEl.textContent = 'Choose your move!';
	gameResultTextEl.classList.remove('win', 'lose', 'tie');
	isGameActive = true;
};

gameChoiceBtns.forEach(button => {
	button.addEventListener('click', () => {
		const choice = button.dataset.choice;
		playRound(choice);
	});
});

gameResetBtn.addEventListener('click', resetGame);
resetGame();