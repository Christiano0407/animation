const $hideButton = document.getElementById(`hide-modal`);
const $overlay = document.getElementById(`overlay`);
const $modal = document.getElementById(`modal`);

$hideButton.addEventListener(`click`, (event) => {
    // console.log(event);
    $modal.style.animation = `modalOut .8s forwards`;
    $overlay.classList.remove(`active`);
});

