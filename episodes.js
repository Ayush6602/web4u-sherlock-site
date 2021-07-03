for (const tab of document.getElementsByClassName('tab')) {
	let tabContent = tab.parentElement.nextElementSibling.firstElementChild;
	let tempTab = tab;
	while (tempTab = tempTab.previousElementSibling) {
		tabContent = tabContent.nextElementSibling;
	}
	tab.addEventListener('click', function () {
		for (const siblingTab of tab.parentElement.children) {
			if (tab != siblingTab) {
				siblingTab.classList.remove('active');
			}
		}
		for (const siblingTabContent of tabContent.parentElement.children) {
			if (tabContent != siblingTabContent) {
				siblingTabContent.classList.add('hide');
			}
		}
		tab.classList.toggle('active');
		tabContent.classList.toggle('hide');
	});
}

const season1Episode3Text = document.getElementById('season1Episode3Text').innerText;
const season3Episode1Text = document.getElementById('season3Episode1Text').innerText;
// what to fill here?
const pathOutcomes = {
	'12345': ['Noob Holmes', 'Even after searching throughly you could not find any traces of any bomb and then you hear a big boom. The path you chose was the easiest one possible. Is lestrade really the most powerful government official you have contacts with?'],
	'123.14.15': ['Fake Holmes', 'Even after searching throughly you could not find any traces of any bomb and then you hear a big boom.  Did you refer to the correct case file?'],
	'123.14.15.1': ['Wannabe Holmes', 'You find the bomb but there is not much time left to diffuse it. You do your best to evacuate people but alas some lives are lost. Maybe you could have had more information if you had checked all case files yourself.'],
	'123.14.25.2': ['Pro Holmes', 'You arrive and find some shady people gathered in the fateful place seeing you arrive they suddenly make their escape. You find a semi-active bomb. Why did you elect to not meet him face to face at his mansion?'],
	'123.14.25.3': ['Sherlock Holmes', 'You contact the yard(police) and hand over the evidence. Although their plan was spoiled but Mr. Yatn did not seem that surprised and was very co-oprative with his arrest(did you miss something?).'],
}
const season1Episode3ReplacementText = 'After going through the case files you realize the most suitable place for them to plant the bomb is Big Ben(Season 3 Highlights).'
const season3Episode1ReplacementText1 = 'After going through the case files you deduce the most suitable place for them to plant the bomb is Westminster Hall.'
const season3Episode1ReplacementText2 = 'You suspect Mr. Yatn as the mastermind behind the incidents, either contact him from your home or follow the direct route to the secret_page to find his mansion.'

document.getElementById('season1Episode3Text').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '4' || sessionStorage.getItem('sherlockStatus') === '5' || sessionStorage.getItem('sherlockStatus') === '4.1') {
		this.innerText = season1Episode3ReplacementText;
		setTimeout(() => {
			this.innerText = season1Episode3Text;
		}, 5000);
		if (sessionStorage.getItem('sherlockStatus') !== '5') {
			sessionStorage.setItem('sherlockStatus', '5');
			sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '5');
		}
	}
});

document.getElementById('season3Episode1Text').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '4.1' || sessionStorage.getItem('sherlockStatus') === '5.1') {
		this.innerText = season3Episode1ReplacementText1;
		setTimeout(() => {
			this.innerText = season3Episode1Text;
		}, 5000);
		if (sessionStorage.getItem('sherlockStatus') !== '5.1') {
			sessionStorage.setItem('sherlockStatus', '5.1');
			sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '5.1');
		}
	}

	if (sessionStorage.getItem('sherlockStatus') === '3.1' || sessionStorage.getItem('sherlockStatus') === '4.2') {
		this.innerText = season3Episode1ReplacementText2;
		setTimeout(() => {
			this.innerText = season3Episode1Text;
		}, 5000);
		if (sessionStorage.getItem('sherlockStatus') !== '4.2') {
			sessionStorage.setItem('sherlockStatus', '4.2');
			sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '4.2');
		}
	}
});

document.getElementById('close').addEventListener('click', function () {
	document.getElementById('modal').style.display = "none";
});

document.getElementById('endingImagePlace1').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '5') {
		let path = sessionStorage.getItem('sherlockPath');
		document.getElementById('sherlockLevel').innerText = pathOutcomes[path][0];
		document.getElementById('sherlockLevelText').innerText = pathOutcomes[path][1];
		document.getElementById('modal').style.display = "block";
		sessionStorage.removeItem('sherlockStatus');
		sessionStorage.removeItem('sherlockPath');
	}
});

document.getElementById('endingImagePlace2').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '5.1' || sessionStorage.getItem('sherlockStatus') === '5.2' || sessionStorage.getItem('sherlockStatus') === '5.3') {
		let path = sessionStorage.getItem('sherlockPath');
		console.log(path);
		document.getElementById('sherlockLevel').innerText = pathOutcomes[path][0];
		document.getElementById('sherlockLevelText').innerText = pathOutcomes[path][1];
		document.getElementById('modal').style.display = "block";
		sessionStorage.removeItem('sherlockStatus');
		sessionStorage.removeItem('sherlockPath');
	}
});