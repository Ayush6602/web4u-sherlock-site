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
const season1Episode3ReplacementText = 'After going through the case files you realize the most suitable place for them to plant the bomb is place_1.'
const season3Episode1ReplacementText1 = 'After going through the case files you deduce the most suitable place for them to plant the bomb is place_2.'
const season3Episode1ReplacementText2 = 'You suspect Mr. Yatn as the mastermind behind the incidents, either contact him from your home or follow the direct route to the secret_page to find his mansion.'

document.getElementById('season1Episode3Text').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '4' || sessionStorage.getItem('sherlockStatus') === '5') {
		this.innerText = season1Episode3ReplacementText;
		setTimeout(() => {
			this.innerText = season1Episode3Text;
		}, 5000);
		sessionStorage.setItem('sherlockStatus', '5');
		sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '5');
	}

	if (sessionStorage.getItem('sherlockStatus') === '4.1' || sessionStorage.getItem('sherlockStatus') === '5') {
		this.innerText = season1Episode3ReplacementText;
		setTimeout(() => {
			this.innerText = season1Episode3Text;
		}, 5000);
		sessionStorage.setItem('sherlockStatus', '5');
		sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '5');
	}
});

document.getElementById('season3Episode1Text').addEventListener('click', function () {
	if (sessionStorage.getItem('sherlockStatus') === '4.1' || sessionStorage.getItem('sherlockStatus') === '5.1') {
		this.innerText = season3Episode1ReplacementText1;
		setTimeout(() => {
			this.innerText = season3Episode1Text;
		}, 5000);
		sessionStorage.setItem('sherlockStatus', '5.1');
		sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '5.1');
	}

	if (sessionStorage.getItem('sherlockStatus') === '3.1' || sessionStorage.getItem('sherlockStatus') === '4.2') {
		this.innerText = season3Episode1ReplacementText2;
		setTimeout(() => {
			this.innerText = season3Episode1Text;
		}, 5000);
		sessionStorage.setItem('sherlockStatus', '4.2');
		sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '4.2');
	}
})