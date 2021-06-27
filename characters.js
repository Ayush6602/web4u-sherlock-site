const lestradeText = document.getElementById('lestradeText').innerText;
var replacementText = "Mr. Das, a business magnate, has had an important letter of his stolen. We suspect Mr. Bangad is the culprit but are lacking evidence to prove so. Help us achieve this task. Return to your home and try contacting Mr. Bangad."

document.getElementById('lestradeText').addEventListener('mouseover', function () {
    if (sessionStorage.getItem('sherlockStatus') === '1' || sessionStorage.getItem('sherlockStatus') === '2') {
        this.innerText = replacementText;
        setTimeout(() => {
            this.innerText = lestradeText;
        }, 10000);
        sessionStorage.setItem('sherlockStatus', '2');
    }
});