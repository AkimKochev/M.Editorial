import gsap from 'gsap';

import {getElements} from '../../utils/text.js';
import {selectArticleElements} from 'utils/dom.js';

import Page from '../../classes/Page.js';

export default class Article extends Page {
	constructor() {
		super({
			classes: {active: 'article--active'},
			element: '.article',
			elements: {},
		});
	}
	show(_) {
		const articleElements = selectArticleElements(
			['p', 'h3', 'h1', '.article__image__link'],
			'.article'
		);

		const elements = getElements(articleElements);

		elements.forEach((element) => {
			if (element.classList.contains('article__image__link')) {
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
				['p', 'h1', 'h3', '.article__image__link'],
				'.article'
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

	toggle() {}
}
