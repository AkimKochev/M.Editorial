import {articleTransition} from '../../animations/articleTransition.js';

export const changeArticle = ({scrollTo, startFrom = 1, data}) => {
	const previusArticle = document.querySelector(
		`[data-article-id="${[
			data.currentIdArticle - 1 < 1 ? 1 : data.currentIdArticle - 1,
		]}"]`
	);
	const nextArticle = document.querySelector(
		`[data-article-id="${[
			data.currentIdArticle + 1 > data.articles.length
				? data.articles.length
				: data.currentIdArticle + 1,
		]}"]`
	);
	const currentArticle = document.querySelector(
		`[data-article-id="${[data.currentIdArticle]}"]`
	);
	previusArticle.style.zIndex = 1;
	nextArticle.style.zIndex = 1;
	currentArticle.style.zIndex = 2;

	for (let i = startFrom; i <= data.articles.length; i++) {
		articleTransition(scrollTo, data, i);
	}
};
