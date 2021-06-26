const season1Episode3ParagraphInnerText = document.getElementById('season1Episode3Paragraph').innerText;
const season3Episode2ParagraphInnerText = document.getElementById('season3Episode2Paragraph').innerText;
const ending1 = "Mr. Bangad pick up the phone agrees that he might have mistakenly taken the letter from Mr. Das during his last business meeting and has agreed to return the same asap."
const ending2 = "Feeling restless you search Mr. Bangad's house and find a copy of the same letter. The letter contains details about many black market deals funded by Mr. Das. Mr. Bangad was trying to get it to the authorities but was threatned and had to surrender."
let sawEnding1InS1 = false;
let sawEnding1InS2 = false;
let sawEnding2 = false;

document.getElementById('season1Episode3Paragraph').addEventListener('mouseover', function () {
	if ((sessionStorage.getItem('sherlockStatus') === '4' || sessionStorage.getItem('sherlockStatus') === '5') && !sawEnding1InS2 && !sawEnding2) {
		this.innerText = ending1;
		sawEnding1InS1 = true;
		setTimeout(() => {
			this.innerText = season1Episode3ParagraphInnerText;
		}, 5000);
		sessionStorage.setItem('sherlockStatus', '5');
	}
});

document.getElementById('season1Episode3Paragraph').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '5' && sawEnding1InS2) {
		this.innerText = ending2;
		sawEnding2 = true;
		setTimeout(() => {
			this.innerText = season1Episode3ParagraphInnerText;
		}, 5000);
	}
});

document.getElementById('season3Episode2Paragraph').addEventListener('mouseover', function () {
	if ((sessionStorage.getItem('sherlockStatus') === '4' || sessionStorage.getItem('sherlockStatus') === '5') && !sawEnding1InS1 && !sawEnding2) {
		this.innerText = ending1;
		sawEnding1InS2 = true;
		setTimeout(() => {
			this.innerText = season3Episode2ParagraphInnerText;
		}, 5000);
		sessionStorage.setItem('sherlockStatus', '5');
	}
});

document.getElementById('season3Episode2Paragraph').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '5' && sawEnding1InS1) {
		this.innerText = ending2;
		sawEnding2 = true;
		setTimeout(() => {
			this.innerText = season3Episode2ParagraphInnerText;
		}, 5000);
	}
});

for (const spoilerButton of document.getElementsByClassName('spoilerButton')) {
	spoilerButton.addEventListener('click', function () {
		console.log(this.nextElementSibling.classList.toggle('hide'))
	})
}