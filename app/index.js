import gsap from 'gsap';

import {split} from 'utils/text.js';

import Article from './pages/Article/index.js';
import Home from './pages/Home/index.js';
import Preloader from './components/Preloader.js';
import Navigation from './components/Navigation.js';

class App {
	constructor() {
		// const mouse = new Mouse();

		this.template = window.location.pathname;
		this.splitText();

		this.createPages();

		this.createPreloader();
		this.addLinkListener();
		this.addEventsListener();
	}

	createPreloader() {
		this.preloader = new Preloader();
		this.preloader.once('completed', () => {
			this.navigation.show();
			this.page.setActive();
			this.page.show(1);
		});
	}

	splitText() {
		const elementToSplit = {
			title: document.querySelectorAll('h2'),
			mainTitle: document.querySelectorAll('h1'),
			mainParagraph: document.querySelectorAll('h3'),
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

	createPages() {
		this.navigation = new Navigation();
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

	addEventsListener() {
		window.addEventListener('popstate', this.onPopState.bind(this));
		this.navigation.menuToggleHandler({
			hide: this.page.hide.bind(this.home),
			show: this.page.show.bind(this.home),
			article: this.home.data.currentIdArticle,
		});

		// Home event handler
		window.addEventListener('wheel', (event) => {
			if (this.template === '/') this.home.scrollWheelHandler(event);
		});
		window.addEventListener(
			'touchstart',
			(event) => {
				if (this.template === '/') this.home.touchStart(event);
			},
			{passive: false}
		);
		window.addEventListener(
			'touchmove',
			(event) => {
				if (this.template === '/') this.home.touchMove(event);
			},
			{passive: false}
		);
		window.addEventListener('touchend', (event) => {
			if (this.template === '/') this.home.touchEnd(event);
		});
	}

	async onChange({url, push = true}) {
		url = url.replace(window.location.origin, '');
		const page = this.pages[url];

		if (push) window.history.pushState({}, '', url);

		await this.page.hide();
		this.page.setActive(false);

		this.page = page;
		this.template = window.location.pathname;
		this.page.setActive();
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
