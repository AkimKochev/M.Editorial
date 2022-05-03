import gsap from 'gsap';

import {split} from 'utils/text.js';

export default class Home {
	constructor() {
		this.splitText();
		this.currentIdArticle = 1;
		this.animateIn();

		this.cursorInner = document.querySelector('.cursor__inner');
		this.cursorOuter = document.querySelector('.cursor__outer');

		this.mousePos = {
			inner: {
				currentX: 0,
				targetX: 0,
				currentY: 0,
				targetY: 0,
			},
			outer: {
				currentX: 0,
				targetX: 0,
				currentY: 0,
				targetY: 0,
			},
		};

		window.addEventListener('wheel', this.scrollWheel.bind(this));
		window.addEventListener('mousemove', this.mouseMove.bind(this));
		this.animate();
	}

	interpolate(current, target, ease) {
		return (current * (1 - ease) + ease * target).toFixed(2);
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

	animateIn() {
		let current = 1;
		while (true) {
			const ids = [
				...document.querySelectorAll(`[data-article-id="${++current}"]`),
			];

			if (!ids.length) return;
			ids.forEach((id) => {
				const child = id.children[0] ? id.children[0] : id;
				if (child.tagName === 'IMG') {
					child.style.transform = `translateY(${100 * current + 10}%)`;
					return;
				}

				[...child.children].forEach((child) => {
					if (!child.children.length) return;
					child.children[0].style.transform = `translateY(${100 * current + 10}%)`;
				});
			});
		}
	}

	scrollWheel(event) {
		if (event.deltaY === 100) {
			if (
				![
					...document.querySelectorAll(
						`[data-article-id="${this.currentIdArticle + 1}"]`
					),
				].length
			)
				return;
			this.next();
		}
		if (event.deltaY === -100) {
			if (
				![
					...document.querySelectorAll(
						`[data-article-id="${this.currentIdArticle - 1}"]`
					),
				].length
			)
				return;
			this.previus();
		}
	}

	next() {
		let ids = [
			...document.querySelectorAll(`[data-article-id="${this.currentIdArticle}"]`),
		];
		ids.forEach((id) => {
			const child = id.children[0] ? id.children[0] : id;
			if (child.tagName === 'IMG') {
				child.style.transform = `translateY(-110%)`;
				return;
			}

			[...child.children].forEach((child) => {
				if (!child.children.length) return;
				child.children[0].style.transform = `translateY(-110%)`;
			});
		});

		this.currentIdArticle++;
		ids = [
			...document.querySelectorAll(`[data-article-id="${this.currentIdArticle}"]`),
		];

		console.log(this.currentIdArticle);
		ids.forEach((id) => {
			const child = id.children[0] ? id.children[0] : id;
			if (child.tagName === 'IMG') {
				child.style.transform = `translateY(0%)`;
				return;
			}

			[...child.children].forEach((child) => {
				if (!child.children.length) return;
				child.children[0].style.transform = `translateY(0%)`;
			});
		});
	}

	previus() {
		let ids = [
			...document.querySelectorAll(`[data-article-id="${this.currentIdArticle}"]`),
		];
		ids.forEach((id) => {
			const child = id.children[0] ? id.children[0] : id;
			if (child.tagName === 'IMG') {
				child.style.transform = `translateY(110%)`;
				return;
			}

			[...child.children].forEach((child) => {
				if (!child.children.length) return;
				child.children[0].style.transform = `translateY(110%)`;
			});
		});

		this.currentIdArticle--;
		ids = [
			...document.querySelectorAll(`[data-article-id="${this.currentIdArticle}"]`),
		];
		console.log(this.currentIdArticle);
		ids.forEach((id) => {
			const child = id.children[0] ? id.children[0] : id;
			if (child.tagName === 'IMG') {
				child.style.transform = `translateY(0%)`;
				return;
			}

			[...child.children].forEach((child) => {
				if (!child.children.length) return;
				child.children[0].style.transform = `translateY(0%)`;
			});
		});
	}

	mouseMove(event) {
		this.mousePos.inner.targetX = event.clientX;
		this.mousePos.inner.targetY = event.clientY;

		this.mousePos.outer.targetX = event.clientX;
		this.mousePos.outer.targetY = event.clientY;
	}

	animate() {
		this.mousePos.inner.currentX = this.interpolate(
			this.mousePos.inner.currentX,
			this.mousePos.inner.targetX,
			0.7
		);
		this.mousePos.inner.currentY = this.interpolate(
			this.mousePos.inner.currentY,
			this.mousePos.inner.targetY,
			0.7
		);

		this.mousePos.outer.currentX = this.interpolate(
			this.mousePos.outer.currentX,
			this.mousePos.outer.targetX,
			0.07
		);
		this.mousePos.outer.currentY = this.interpolate(
			this.mousePos.outer.currentY,
			this.mousePos.outer.targetY,
			0.07
		);

		this.cursorInner.style.transform = `translate3d(${
			this.mousePos.inner.currentX -
			this.cursorInner.getBoundingClientRect().height / 2
		}px, ${
			this.mousePos.inner.currentY -
			this.cursorInner.getBoundingClientRect().height / 2
		}px, 0)`;

		this.cursorOuter.style.transform = `translate3d(${
			this.mousePos.outer.currentX -
			this.cursorOuter.getBoundingClientRect().height / 2
		}px, ${
			this.mousePos.outer.currentY -
			this.cursorOuter.getBoundingClientRect().height / 2
		}px, 0)`;

		requestAnimationFrame(this.animate.bind(this));
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
