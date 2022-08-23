const body = document.getElementsByTagName ('body') [0];
const button = document.getElementById ('contraste');

function Dark() {
    body.classList.toggle('darkbackground')
};

button.addEventListener ('click', Dark)