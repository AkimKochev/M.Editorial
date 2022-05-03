import gsap from 'gsap';

export default class Article {
	constructor() {}
	show() {
		const parent = document.querySelector('.article');
		parent.classList.add(`article--active`);
	}
	hide() {
		const parent = document.querySelector('.article');
		parent.classList.remove(`article--active`);
	}
}
