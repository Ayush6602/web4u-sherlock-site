const briefParagraphInnerText = document.getElementById('briefParagraph').innerText;
const briefParagraphReplacementText1 = 'The London police seem quite frazzled about something, ask a government official what it might be about.';
const briefParagraphReplacementText2 = 'You recall that a similar incident had happened in the past in either S1E3 or S3E1. Look at the case files of either of these to find more useful information.'
const copyrightText = document.getElementById('copyrightParagraph').innerText;
const copyrightReplacementText = 'After talking to him you deduce that the bomb is in place_2.';

if (sessionStorage.getItem('sherlockStatus')) {
	document.getElementById('challengeButton').style.display = 'none';
}
else {
	document.getElementById('challengeButton').addEventListener('click', function () {
		alert('Find clues and solve the mystery of this site');
		this.style.display = 'none';
		sessionStorage.setItem('sherlockStatus', '1');
		sessionStorage.setItem('sherlockPath', '1');
	});
}

document.getElementById('briefParagraph').addEventListener('mouseover', function () {
	if (sessionStorage.getItem('sherlockStatus') === '1' || sessionStorage.getItem('sherlockStatus') === '2') {
		this.innerText = briefParagraphReplacementText1;
		setTimeout(() => {
			this.innerText = briefParagraphInnerText;
		}, 5000);
		if (sessionStorage.getItem('sherlockStatus') !== '2') {
			sessionStorage.setItem('sherlockStatus', '2');
			sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '2');
		}
	}

	if (sessionStorage.getItem('sherlockStatus') === '3.1' || sessionStorage.getItem('sherlockStatus') === '4.1') {
		this.innerText = briefParagraphReplacementText2;
		setTimeout(() => {
			this.innerText = briefParagraphInnerText;
		}, 5000);
		if (sessionStorage.getItem('sherlockStatus') !== '4.1') {
			sessionStorage.setItem('sherlockStatus', '4.1');
			sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '4.1');
		}
	}
});

document.getElementById('yatnContactParagraph').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '4.2' || sessionStorage.getItem('sherlockStatus') === '5.2') {
		document.getElementById('copyrightParagraph').innerText = copyrightReplacementText;
		setTimeout(() => {
			document.getElementById('copyrightParagraph').innerText = copyrightText;
		}, 5000);
		if (sessionStorage.getItem('sherlockStatus') !== '5.2') {
			sessionStorage.setItem('sherlockStatus', '5.2');
			sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '5.2');
		}
	}
});