import gsap from 'gsap';

import Mouse from './components/Mouse.js';

import Article from './pages/Article/index.js';
import Home from './pages/Home/index.js';

class App {
	constructor() {
		const mouse = new Mouse();

		this.template = window.location.pathname;

		this.createPages();

		this.addLinkListener();
		this.addEventListeners();
		this.page.show();
	}

	createPages() {
		this.home = new Home();
		this.article = new Article();

		this.pages = {
			'/': this.home,
			'/article': this.article,
		};

		this.page = this.pages[this.template];
	}

	onPopState() {
		this.onChange({
			url: window.location.pathname,
			push: false,
		});
	}

	addEventListeners() {
		window.addEventListener('popstate', this.onPopState.bind(this));
	}

	onChange({url, push = true}) {
		url = url.replace(window.location.origin, '');
		const page = this.pages[url];

		if (push) window.history.pushState({}, '', url);

		this.page.hide();
		this.page = page;
		this.page.show();
	}

	addLinkListener() {
		const anchorLink = document.querySelectorAll('a');

		anchorLink.forEach((link) => {
			if (link.href.indexOf(window.location.origin) < 0) return;

			link.onclick = (event) => {
				event.preventDefault();

				this.onChange({url: link.href});
			};
		});
	}
}

new App();
