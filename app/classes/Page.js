export default class Page {
	constructor({classes, element, elements, isScrollable = true}) {
		this.data = {
			articles: [...document.querySelectorAll('[data-article-id]')],
			currentIdArticle: 1,
		};

		this.classes = {
			...classes,
		};

		this.selector = {
			element: element,

			elements: {
				...elements,
			},
		};

		this.create();
	}

	create() {
		this.element = document.querySelector(this.selector.element);
		this.elements = {};

		for (const [selector, key] of Object.entries(this.selector.elements)) {
			if (key instanceof window.HTMLElement || key instanceof window.NodeList) {
				this.elements[selector] = key;
			} else if (Array.isArray(selector)) {
				this.elements[selector] = key;
			} else {
				this.elements[selector] = this.element.querySelectorAll(key);

				if (this.elements[selector].length === 0) {
					this.elements[selector] = null;
				} else if (this.elements[selector].length === 1) {
					this.elements[selector] = this.element.querySelector(key);
				}
			}
		}
	}

	setActive(active = true) {
		const parent = document.querySelector(this.selector.element);

		active
			? parent.classList.add(this.classes.active)
			: parent.classList.remove(this.classes.active);
	}
}
