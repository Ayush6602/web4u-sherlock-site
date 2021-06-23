const briefParagraphInnerText = document.getElementById('briefParagraph').innerText;
const ayushContactParagraphInnerText = document.getElementById('ayushContactParagraph').innerText;

document.getElementById('challengeButton').addEventListener('click', function () {
	alert('Find clues and solve the mystery of this site');
	this.style.opacity = 0;
	sessionStorage.setItem('sherlockStatus', '0');
});

document.getElementById('briefParagraph').addEventListener('pointerenter', function () {
	if (sessionStorage.getItem('sherlockStatus') === '0' || sessionStorage.getItem('sherlockStatus') === '1') {
		this.innerText = briefParagraphInnerText + ' (You overhear some citizens) "The yard seems quite frazzeled, something must have happened"';
		sessionStorage.setItem('sherlockStatus', '1');
	}
});

document.getElementById('briefParagraph').addEventListener('pointerleave', function () {
	this.innerText = briefParagraphInnerText;
});

document.getElementById('yatnContactParagraph').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '2' || sessionStorage.getItem('sherlockStatus') === '3') {
		this.parentElement.append('It seems Mr. Das has picked up the phone, maybe the numbers have switched.');
		setTimeout(() => {
			this.parentElement.lastChild.remove();
		}, 3000);
		sessionStorage.setItem('sherlockStatus', '3');
	}
});

document.getElementById('ayushContactParagraph').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '3' || sessionStorage.getItem('sherlockStatus') === '4') {
		this.innerText = 'Ayush: S1E3-S3E2';
		setTimeout(() => {
			this.innerText = ayushContactParagraphInnerText;
		}, 3000);
		sessionStorage.setItem('sherlockStatus', '4');
	}
});