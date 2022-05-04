import gsap from 'gsap';

import {split} from 'utils/text.js';

export default class Home {
	constructor() {
		this.data = {
			articles: [...document.querySelectorAll('[data-article-id]')],
			currentIdArticle: 1,
		};

		this.splitText();
		this.changeArticle({scrollTo: 100, startFrom: 2});

		window.addEventListener('wheel', this.scrollWheelHandler.bind(this));
	}

	splitText() {
		const elementToSplit = {
			title: document.querySelectorAll('h2'),
			description: document.querySelectorAll('p'),
		};

		for (const element in elementToSplit) {
			if (!elementToSplit.hasOwnProperty(element)) return;

			elementToSplit[element].forEach((text) => {
				split({
					append: true,
					element: text,
					expression: '<br>',
				});
			});
		}
	}

	scrollWheelHandler(event) {
		if (event.deltaY >= 10) {
			if (this.data.currentIdArticle + 1 > this.data.articles.length) return;
			this.data.currentIdArticle++;
			this.changeArticle({scrollTo: -100});
		}
		if (event.deltaY <= -10) {
			if (this.data.currentIdArticle - 1 <= 0) return;
			this.data.currentIdArticle--;
			this.changeArticle({scrollTo: 100});
		}
	}

	changeArticle({scrollTo, startFrom = 1}) {
		for (let i = startFrom; i <= this.data.articles.length; i++) {
			const currentIdArticle = `[data-article-id="${[i]}"]`;

			const articleElements = {
				p: [...document.querySelectorAll(`${currentIdArticle} p`)],
				h2: [...document.querySelectorAll(`${currentIdArticle} h2`)],
				img: [...document.querySelectorAll(`${currentIdArticle} img`)],
			};

			for (const elements in articleElements) {
				articleElements[elements].forEach((el) => {
					if (el.tagName === 'IMG')
						el.style.transform = `translate3d(0, ${
							scrollTo * (this.data.currentIdArticle - i)
						}%, 0)`;

					[...el.children].forEach((span) => {
						if (span.tagName === 'BR') return;
						[...span.children].forEach((spanElement) => {
							spanElement.style.transform = `translate3d(0, ${
								scrollTo * (this.data.currentIdArticle - i)
							}%, 0)`;
						});
					});
				});
			}
		}
	}

	show() {
		const parent = document.querySelector('.home__articles');
		parent.classList.add(`home__articles--active`);
	}

	hide() {
		const parent = document.querySelector('.home__articles');
		parent.classList.remove(`home__articles--active`);
	}
}
