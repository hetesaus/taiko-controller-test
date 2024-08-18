// TODO add option to change key

const katLeft = document.getElementById('katLeft');
const donLeft = document.getElementById('donLeft');
const donRight = document.getElementById('donRight');
const katRight = document.getElementById('katRight');

const katLeftImg = document.getElementById('katLeftImg');
const donLeftImg = document.getElementById('donLeftImg');
const donRightImg = document.getElementById('donRightImg');
const katRightImg = document.getElementById('katRightImg');

const katLeftButton = document.getElementById('katLeftButton');
const donLeftButton = document.getElementById('donLeftButton');
const donRightButton = document.getElementById('donRightButton');
const katRightButton = document.getElementById('katRightButton');

let katLeftCount = 0;
let donLeftCount = 0;
let donRightCount = 0;
let katRightCount = 0;

let flashDuration = 100;

katLeftButton.addEventListener('click', () => {
	katLeftButton.disabled = true;
});

donLeftButton.addEventListener('click', () => {
	donLeftButton.disabled = true;
});

donRightButton.addEventListener('click', () => {
	donRightButton.disabled = true;
});

katRightButton.addEventListener('click', () => {
	katRightButton.disabled = true;
});

function flashImage(element) {
	element.style.display = 'block';
	setTimeout(function() {
		element.style.display = 'none';
	}, flashDuration);
}

function reset() {
	katLeftCount = 0;
	donLeftCount = 0;
	donRightCount = 0;
	katRightCount = 0;
		
	katLeft.innerText = katLeftCount;
	donLeft.innerText = donLeftCount;
	donRight.innerText = donRightCount;
	katRight.innerText = katRightCount;
		
	katLeftButton.disabled = false;
	donLeftButton.disabled = false;
	donRightButton.disabled = false;
	katRightButton.disabled = false;
}

document.addEventListener('keydown', function(event) {
	if (event.key === 'f' || event.key === 'F') {
		katLeftCount++;
		katLeft.innerText = katLeftCount;
		flashImage(katLeftImg);
	}
	if (event.key === 'k' || event.key === 'K') {
		donLeftCount++;
		donLeft.innerText = donLeftCount;
		flashImage(donLeftImg);
	}
	if (event.key === 'j' || event.key === 'J') {
		donRightCount++;
		donRight.innerText = donRightCount;
		flashImage(donRightImg);
	}
	if (event.key === 'd' || event.key === 'D') {
		katRightCount++;
		katRight.innerText = katRightCount;
		flashImage(katRightImg);
	}
	
	if (event.key == " " || event.code == "Space" || event.keyCode == 32  ) {
		reset();
	}
});