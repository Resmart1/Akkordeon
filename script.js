let array = document.querySelectorAll('.accordion__item-title');

function show(event) {
	let a = event.target;
	a.parentNode.classList.toggle("accordion__item--active");
}

for (i = 0; i < array.length; i++) {
	array[i].addEventListener("click", show);
}