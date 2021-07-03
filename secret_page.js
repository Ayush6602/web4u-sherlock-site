document.getElementById('secretPageButton').addEventListener('mouseover', function () {
	if (sessionStorage.getItem('sherlockStatus') === '4.2') {
		sessionStorage.setItem('sherlockStatus', '5.3');
		sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '5.3');
	}
});