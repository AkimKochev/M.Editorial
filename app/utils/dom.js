export const getOffset = (element, scroll = 0) => {
	const box = element.getBoundingClientRect();

	return {
		bottom: box.bottom,
		height: box.height,
		left: box.left,
		top: box.top + scroll,
		width: box.width,
	};
};

export const selectArticleElements = (elements, parent) => {
	const articleElements = {};

	elements.forEach((element) => {
		const selector = document.querySelectorAll(`${parent} ${element}`);
		[...(articleElements[selector[0]?.tagName] = selector)];
	});

	return articleElements;
};

export const CSS = `cubic-bezier(0.55, 0, 0.175, 1)`;
