
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


const nav = document.getElementById('main-nav');
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

// Navbar action menu
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

// Navbar chatbot drawer
// 1. Get all the necessary elements
const chatbotBtn = document.getElementById('chatbot-btn');
const drawerContainer = document.getElementById('chatbot-drawer');
const drawerContent = document.getElementById('chatbot-drawer-content');

// Function to open the drawer
const openDrawer = () => {
	drawerContainer.classList.remove('hidden');
};

// Function to close the drawer
const closeDrawer = () => {
	drawerContainer.classList.add('hidden');
};

// 2. Open drawer when the chatbot button is clicked
chatbotBtn.addEventListener('click', (event) => {
	event.stopPropagation(); // Prevent this click from closing the action menu
	openDrawer();
});

// 3. Close drawer when clicking on the overlay (the container)
drawerContainer.addEventListener('click', () => {
	closeDrawer();
});

// 4. IMPORTANT: Prevent closing when clicking inside the content
// Clicks inside the content "bubble up" to the container. We stop them.
drawerContent.addEventListener('click', (event) => {
	event.stopPropagation();
});