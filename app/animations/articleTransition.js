import gsap from 'gsap';

import {getElements} from '../utils/text.js';
import {selectArticleElements} from '../utils/dom.js';

export const articleTransition = (scrollTo, data, i) => {
	const articleElements = selectArticleElements(
		['p', 'h2', '.home__media__image__link'],
		`[data-article-id="${i}"]`
	);

	const elements = getElements(articleElements);
	const currentIdArticle = `[data-article-id="${[i]}"]`;

	elements.forEach((element) => {
		if (element.tagName === 'A') {
			currentIdArticle === `[data-article-id="${data.currentIdArticle}"]` &&
				gsap.set(element, {
					scale: 1.4,
					y: '120%',
					// rotateX: `-10deg`,
				});
			gsap.to(element, {
				y: `${scrollTo * (data.currentIdArticle - i)}%`,
				duration: 1.5,
				ease: 'power3.out',
				delay: 0,
				rotateX: `0deg`,
				scale:
					data.currentIdArticle - 1 === i || data.currentIdArticle + 1 === i
						? 1.4
						: 1,
			});
		} else {
			currentIdArticle === `[data-article-id="${data.currentIdArticle}"]` &&
				gsap.set(element, {
					y: '110%',
				});
			gsap.to(element, {
				y: `${scrollTo * (data.currentIdArticle - i)}%`,
				duration: 1.2,
				delay:
					data.currentIdArticle - 1 === i || data.currentIdArticle + 1 === i
						? 0
						: data.currentIdArticle === i &&
						  element.closest('h2') &&
						  element.closest('.home__description__digit__text') == null
						? 0.9
						: data.currentIdArticle === i &&
						  element.closest('.home__description__digit__text')
						? 1.2
						: 1.7,
				ease: 'power3.out',
			});
		}
	});
};
