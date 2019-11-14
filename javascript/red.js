const $like = document.getElementById(`like`);

$like.addEventListener(`click`, (event) => {
console.log(event);

// $like.classList.add(`is-liked`);
$like.classList.toggle(`is-liked`);
});