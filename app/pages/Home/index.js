import gsap from 'gsap';

import {split} from 'utils/text.js';
import {CSS} from 'utils/variables.js';

export default class Home {
	constructor() {
		this.scrollTimeout = true;
		this.data = {
			articles: [...document.querySelectorAll('[data-article-id]')],
			currentIdArticle: 1,
		};

		this.splitText();
		this.changeArticle({scrollTo: -100, startFrom: 2});

		window.addEventListener('wheel', this.scrollWheelHandler.bind(this));
		window.addEventListener('touchstart', this.scrollWheelHandler.bind(this));
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

	setScrollTimeout() {
		this.scrollTimeout = false;
		setTimeout((_) => (this.scrollTimeout = true), 1800);
	}

	scrollWheelHandler(event) {
		console.log(event);
		if (!this.scrollTimeout) return;

		if (event.deltaY >= 10) {
			if (this.data.currentIdArticle + 1 > this.data.articles.length) return;
			this.data.currentIdArticle++;
			this.changeArticle({scrollTo: -100});

			this.setScrollTimeout();
		}
		if (event.deltaY <= -10) {
			if (this.data.currentIdArticle - 1 <= 0) return;
			this.data.currentIdArticle--;
			this.changeArticle({scrollTo: 100});

			this.setScrollTimeout();
		}
	}

	changeArticle({scrollTo, startFrom = 1}) {
		const previusArticle = document.querySelector(
			`[data-article-id="${[
				this.data.currentIdArticle - 1 < 1 ? 1 : this.data.currentIdArticle - 1,
			]}"]`
		);
		const nextArticle = document.querySelector(
			`[data-article-id="${[
				this.data.currentIdArticle + 1 > this.data.articles.length
					? this.data.articles.length
					: this.data.currentIdArticle + 1,
			]}"]`
		);
		const currentArticle = document.querySelector(
			`[data-article-id="${[this.data.currentIdArticle]}"]`
		);
		previusArticle.style.zIndex = 1;
		nextArticle.style.zIndex = 1;
		currentArticle.style.zIndex = 2;

		for (let i = startFrom; i <= this.data.articles.length; i++) {
			const currentIdArticle = `[data-article-id="${[i]}"]`;
			const articleElements = {
				p: [...document.querySelectorAll(`${currentIdArticle} p`)],
				h2: [...document.querySelectorAll(`${currentIdArticle} h2`)],
				a: [
					...document.querySelectorAll(
						`${currentIdArticle} .home__media__image__link`
					),
				],
			};

			for (const elements in articleElements) {
				articleElements[elements].forEach(async (el) => {
					if (el.tagName === 'A') {
						currentIdArticle ===
							`[data-article-id="${this.data.currentIdArticle}"]` &&
							gsap.set(el, {
								y: '110%',
								rotateX: `-10deg`,
								scale: 1.3,
							});
						gsap.to(el, {
							y: `${scrollTo * (this.data.currentIdArticle - i)}%`,
							duration: 1.8,
							ease: 'power3.out',
							delay:
								this.data.currentIdArticle - 1 === i ||
								this.data.currentIdArticle + 1 === i
									? 0.3
									: 0,
							rotateX: `0deg`,
							scale: 1,
						});
					}

					[...el.children].forEach((span) => {
						if (span.tagName === 'BR') return;

						[...span.children].forEach(async (spanElement) => {
							currentIdArticle ===
								`[data-article-id="${this.data.currentIdArticle}"]` &&
								gsap.set(spanElement, {
									y: '110%',
								});
							gsap.to(spanElement, {
								y: `${scrollTo * (this.data.currentIdArticle - i)}%`,
								duration: 1.2,
								delay:
									this.data.currentIdArticle - 1 === i ||
									this.data.currentIdArticle + 1 === i
										? 0
										: this.data.currentIdArticle === i &&
										  spanElement.closest('h2') &&
										  spanElement.closest('.home__description__digit__text') == null
										? 0.8
										: this.data.currentIdArticle === i &&
										  spanElement.closest('.home__description__digit__text')
										? 1.2
										: 1.5,
								ease: 'power3.out',
							});
						});
					});
				});
			}
		}
	}

	show() {
		const parent = document.querySelector('.home__articles');
		parent.classList.add(`home__articles--active`);

		const currentIdArticle = document.querySelector(
			`[data-article-id="${[this.data.currentIdArticle]}"]`
		);

		const articleElements = {
			p: [...document.querySelectorAll(`[data-article-id="1"] p`)],
			h2: [...document.querySelectorAll(`[data-article-id="1"] h2`)],
			a: [
				...document.querySelectorAll(
					`[data-article-id="1"] .home__media__image__link`
				),
			],
		};

		for (const elements in articleElements) {
			articleElements[elements].forEach(async (el) => {
				if (el.tagName === 'A') {
					gsap.set(el, {
						y: '110%',
						rotateX: `-10deg`,
						scale: 1.3,
					});
					gsap.to(el, {
						y: `${scrollTo * (this.data.currentIdArticle - 1)}%`,
						duration: 2,
						delay: 1,
						ease: 'expo.out',
						rotateX: `0deg`,
						scale: 1,
					});
				}

				[...el.children].forEach((span) => {
					if (span.tagName === 'BR') return;

					[...span.children].forEach(async (spanElement) => {
						gsap.set(spanElement, {
							y: '110%',
						});
						gsap.to(spanElement, {
							y: `${scrollTo * (this.data.currentIdArticle - 1)}%`,
							duration: 1.5,
							ease: 'expo.out',
							delay: 1,
						});
					});
				});
			});
		}
	}

	hide() {
		const parent = document.querySelector('.home__articles');
		parent.classList.remove(`home__articles--active`);
	}
}
