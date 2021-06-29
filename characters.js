const lestradeText = document.getElementById('lestradeText').innerText;
const replacementText = "Mr. Das, a business magnate, has had an important letter of his stolen. We suspect Mr. Bangad is the culprit but are lacking evidence to prove so. Help us achieve this task. Return to your home and try contacting Mr. Bangad."

document.getElementById('lestradeText').addEventListener('mouseover', function () {
    if (sessionStorage.getItem('sherlockStatus') === '1' || sessionStorage.getItem('sherlockStatus') === '2') {
        this.innerText = replacementText;
        setTimeout(() => {
            this.innerText = lestradeText;
        }, 10000);
        sessionStorage.setItem('sherlockStatus', '2');
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
