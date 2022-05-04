import gsap from 'gsap';

export default class Mouse {
	constructor() {
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

		this.animate();
		window.addEventListener('mousemove', this.handleMouseMove.bind(this));
	}

	handleMouseMove(event) {
		this.mousePos.inner.targetX = event.clientX;
		this.mousePos.inner.targetY = event.clientY;

		this.mousePos.outer.targetX = event.clientX;
		this.mousePos.outer.targetY = event.clientY;
	}

	animate() {
		this.mousePos.inner.currentX = gsap.utils.interpolate(
			this.mousePos.inner.currentX,
			this.mousePos.inner.targetX,
			0.7
		);
		this.mousePos.inner.currentY = gsap.utils.interpolate(
			this.mousePos.inner.currentY,
			this.mousePos.inner.targetY,
			0.7
		);

		this.mousePos.outer.currentX = gsap.utils.interpolate(
			this.mousePos.outer.currentX,
			this.mousePos.outer.targetX,
			0.07
		);
		this.mousePos.outer.currentY = gsap.utils.interpolate(
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
}
