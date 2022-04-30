import gsap from 'gsap';

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
		const item = document.querySelector('h2');
		const lines = item.innerHTML.split('<br>');
		const parent = item.closest('div');
		parent.innerHTML = '';
		lines.forEach((line) => {
			const wrapper = document.createElement('div');
			const lineContainer = document.createElement('h2');
			lineContainer.textContent = line;

			wrapper.insertAdjacentElement('beforeend', lineContainer);
			wrapper.style.overflow = 'hidden';
			parent.insertAdjacentElement('afterbegin', wrapper);
		});
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
				child.style.transform = `translateY(${100 * current}%)`;
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
			child.style.transform = 'translateY(-100%)';
		});

		this.currentIdArticle++;
		ids = [
			...document.querySelectorAll(`[data-article-id="${this.currentIdArticle}"]`),
		];

		console.log(this.currentIdArticle);
		ids.forEach((id) => {
			const child = id.children[0] ? id.children[0] : id;
			child.style.transform = 'translateY(0%)';
		});
	}

	previus() {
		let ids = [
			...document.querySelectorAll(`[data-article-id="${this.currentIdArticle}"]`),
		];
		ids.forEach((id) => {
			const child = id.children[0] ? id.children[0] : id;
			child.style.transform = 'translateY(100%)';
		});

		this.currentIdArticle--;
		ids = [
			...document.querySelectorAll(`[data-article-id="${this.currentIdArticle}"]`),
		];
		console.log(this.currentIdArticle);
		ids.forEach((id) => {
			const child = id.children[0] ? id.children[0] : id;
			child.style.transform = 'translateY(0%)';
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
			0.1
		);
		this.mousePos.inner.currentY = this.interpolate(
			this.mousePos.inner.currentY,
			this.mousePos.inner.targetY,
			0.1
		);

		this.mousePos.outer.currentX = this.interpolate(
			this.mousePos.outer.currentX,
			this.mousePos.outer.targetX,
			0.04
		);
		this.mousePos.outer.currentY = this.interpolate(
			this.mousePos.outer.currentY,
			this.mousePos.outer.targetY,
			0.04
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
}
