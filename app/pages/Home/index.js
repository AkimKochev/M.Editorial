import gsap from 'gsap';

import {selectArticleElements} from 'utils/dom.js';
import {SCROLL_TIMEOUT, NEXT, PREVIOUS} from '../../utils/config.js';

import Page from '../../classes/Page.js';
import {changeArticle} from './article.js';

import {getElements} from '../../utils/text.js';

export default class Home extends Page {
	constructor() {
		super({
			classes: {active: 'home__articles--active'},
			element: '.home__articles',
			elements: {},
		});
		this.scrollTimeout = true;

		changeArticle({scrollTo: -125, startFrom: 2, data: this.data});
	}

	touchMove(e) {
		e.preventDefault();
		this.yStart = e.touches ? e.touches[0].clientY : e.clientY;
	}

	touchStart(e) {
		this.yEnd = e.touches ? e.touches[0].clientY : e.clientY;
	}

	touchEnd(e) {
		this.scrollWheelHandler();
	}

	setScrollTimeout() {
		this.scrollTimeout = false;
		setTimeout((_) => (this.scrollTimeout = true), SCROLL_TIMEOUT);
	}

	scrollWheelHandler(event) {
		if (!this.scrollTimeout) return;

		const scrollDown =
			event?.deltaY >= 10 ||
			(this.yStart < this.yEnd && Math.abs(this.yStart - this.yEnd) > 80);

		const scrollUp =
			event?.deltaY <= -10 ||
			(this.yStart > this.yEnd && Math.abs(this.yStart - this.yEnd) > 80);

		if (scrollDown) {
			if (this.data.currentIdArticle + 1 > this.data.articles.length) return;

			this.data.currentIdArticle++;
			changeArticle({scrollTo: NEXT, data: this.data});

			this.setScrollTimeout();
		}
		if (scrollUp) {
			if (this.data.currentIdArticle - 1 <= 0) return;

			this.data.currentIdArticle--;
			changeArticle({scrollTo: PREVIOUS, data: this.data});

			this.setScrollTimeout();
		}
	}

	show(id = this.data.currentIdArticle) {
		const articleElements = selectArticleElements(
			['p', 'h2', '.home__media__image__link'],
			`[data-article-id="${id}"]`
		);

		const elements = getElements(articleElements);

		elements.forEach((element) => {
			if (element.classList.contains('home__media__image__link')) {
				console.log(element);
				gsap.set(element, {
					scale: 1.4,
					y: `125%`,
				});
				gsap.to(element, {
					y: `0%`,
					duration: 1.5,
					ease: 'power3.out',
					rotateX: `0deg`,
					scale: 1,
					delay: 0.8,
				});
			} else {
				gsap.set(element, {
					y: '110%',
				});
				gsap.to(element, {
					y: `0%`,
					duration: 1.5,
					ease: 'power3.out',
					delay: 0.8,
				});
			}
		});
	}

	hide() {
		return new Promise((resolve, reject) => {
			const articleElements = selectArticleElements(
				['p', 'h2', '.home__media__image__link'],
				`[data-article-id="${this.data.currentIdArticle}"]`
			);
			const elements = getElements(articleElements);

			const tl = gsap.timeline({onComplete: resolve});
			elements.forEach((element) => {
				if (element.tagName === 'A') {
					tl.to(
						element,
						{
							y: `-125%`,
							duration: 1.5,
							delay: 0,
							ease: 'power3.out',
							// rotateX: `10deg`,
							scale: 1.4,
						},
						'<'
					);
				} else {
					tl.to(
						element,
						{
							y: `-110%`,
							duration: 1.5,
							ease: 'power3.out',
							delay: 0,
						},
						'<'
					);
				}
			});
		});
	}
}
