let nameChange = document.getElementById('name_change');
let mainImage = document.getElementById('main_image');
let smallImage1 = document.getElementById('first');
let smallImage2 = document.getElementById('second');
let smallImage3 = document.getElementById('thr');
let smallImage4 = document.getElementById('fourth');

smallImage1.addEventListener('click', () => {
	if(mainImage.src !== 'images/noavatar_2.png'){
		nameChange.textContent = smallImage1.getAttribute('data-tooltip');
		mainImage.src = 'images/noavatar_2.png';
	}
});
smallImage2.addEventListener('click', () => {
	if(mainImage.src !== 'images/noavatar_3.png'){
		nameChange.textContent = smallImage2.getAttribute('data-tooltip');
		mainImage.src = 'images/noavatar_3.png';
	}
});
smallImage3.addEventListener('click', () => {
	if(mainImage.src !== 'images/noavatar_4.png'){
		nameChange.textContent = smallImage3.getAttribute('data-tooltip');;
		mainImage.src = 'images/noavatar_4.png';
	}
});
smallImage4.addEventListener('click', () => {
	if(mainImage.src !== 'images/noavatar_5.png'){
		nameChange.textContent = smallImage4.getAttribute('data-tooltip');;
		mainImage.src = 'images/noavatar_5.png';
	}
});