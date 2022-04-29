import gsap from 'gsap';

export default class Home {
	constructor() {
		const ids = [...document.querySelectorAll('[data-article-id="2"]')];

		ids.forEach((id) => {
			const child = id.children[0] ? id.children[0] : id;
			child.style.transform = 'translateY(100%)';
		});

		this.cursorInner = document.querySelector('.cursor__inner');
		this.cursorOuter = document.querySelector('.cursor__outer');
		window.addEventListener('mousemove', this.mouseMove.bind(this));

		this.mousePos = {
			currentX: 0,
			targetX: 0,
			currentY: 0,
			targetY: 0,
			ease: 0.04,
		};
	}

	interpolate(current, target, ease) {
		return current * (1 - ease) + ease * target;
	}

	mouseMove(event) {
		this.mousePos.targetX = event.clientX;
		this.mousePos.targetY = event.clientY;
		this.animate();
	}

	animate() {
		this.mousePos.currentX = this.interpolate(
			this.mousePos.currentX,
			this.mousePos.targetX,
			this.mousePos.ease
		).toFixed(2);
		this.mousePos.currentY = this.interpolate(
			this.mousePos.currentY,
			this.mousePos.targetY,
			this.mousePos.ease
		).toFixed(2);
		this.cursorInner.style.transform = `translate3d(${this.mousePos.currentX}px, ${this.mousePos.currentY}px, 0)`;

		this.cursorOuter.style.transform = `translate3d(${this.mousePos.currentX}px, ${this.mousePos.currentY}px, 0)`;
		requestAnimationFrame(this.animate.bind(this));
	}
}
