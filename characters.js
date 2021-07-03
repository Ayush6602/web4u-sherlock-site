const lestradeText = document.getElementById('lestradeText').innerText;
const mycroftText = document.getElementById('mycroftText').innerText;
const watsonText = document.getElementById('watsonText').innerText;
const lestradeReplacementText = 'We have received a message from the higher-ups that there may be a bomb planted somewhere in the city. Talk to Dr. Watson, I have explained everything to him already.'
const mycroftReplacementText = 'A similar incident has happened in the past. Go visit the case file (summary) of that episode. Alternatively, go to your home to get a brief and some help.';
const watsonReplacementText = "Let's check the case files (summary) of a older incident (covered in S1E3) to get some help."

document.getElementById('lestradeText').addEventListener('click', function () {
    if (sessionStorage.getItem('sherlockStatus') === '2' || sessionStorage.getItem('sherlockStatus') === '3') {
        this.innerText = lestradeReplacementText;
        setTimeout(() => {
            this.innerText = lestradeText;
        }, 5000);
        if (sessionStorage.getItem('sherlockStatus') !== '3') {
            sessionStorage.setItem('sherlockStatus', '3');
            sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '3');
        }
    }
});

document.getElementById('watsonText').addEventListener('click', function () {
    if (sessionStorage.getItem('sherlockStatus') === '3' || sessionStorage.getItem('sherlockStatus') === '4') {
        this.innerText = watsonReplacementText;
        setTimeout(() => {
            this.innerText = watsonText;
        }, 5000);
        if (sessionStorage.getItem('sherlockStatus') !== '4') {
            sessionStorage.setItem('sherlockStatus', '4');
            sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '4');
        }
    }
});

document.getElementById('mycroftText').addEventListener('click', function () {
    if (sessionStorage.getItem('sherlockStatus') === '2' || sessionStorage.getItem('sherlockStatus') === '3.1') {
        this.innerText = mycroftReplacementText;
        setTimeout(() => {
            this.innerText = mycroftText;
        }, 5000);
        if (sessionStorage.getItem('sherlockStatus') !== '3.1') {
            sessionStorage.setItem('sherlockStatus', '3.1');
            sessionStorage.setItem('sherlockPath', sessionStorage.getItem('sherlockPath') + '3.1');
        }
    }
});

if (window.innerWidth <= 900) {
    let descriptions = document.getElementsByClassName('description-img-text');
    for (let description of descriptions) {
        description.classList.toggle('modal');
    }

    let descriptionImages = document.getElementsByClassName('description-img');
    for (let image of descriptionImages) {
        let modalText = image.lastElementChild;
        image.addEventListener('mouseover', function () {
            modalText.style.display = 'block';
        });
    }


    let closeBtns = document.getElementsByClassName('close');
    for (let closeBtn of closeBtns) {
        closeBtn.classList.toggle('hidden');
        let modalText = closeBtn.parentElement;
        closeBtn.addEventListener('click', function () {
            modalText.style.display = 'none';
        });
    }
}
