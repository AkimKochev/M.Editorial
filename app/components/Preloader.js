import EventEmitter from 'events';
import gsap from 'gsap';

export default class Preloader extends EventEmitter {
	constructor() {
		super();
		this.parent = document.querySelector('.preloader');
		this.percentageText = document.querySelector('.preloader__number__text');
		this.svg = document.querySelector('.preloader__container svg');
		this.length = 0;

		this.loadAssets();
	}

	loadAssets() {
		this.images = [...document.querySelectorAll('img')];
		this.total = this.images.length - 1;

		this.images.forEach((img) => {
			img.addEventListener('load', (e) => {
				this.onLoad();
			});
		});
	}

	destroy() {
		this.parent.remove();
	}

	allLoaded() {
		const tl = gsap.timeline({
			onComplete: () => {
				this.emit('completed');
				this.destroy();
			},
			delay: 1.4,
			duration: 1.5,
			ease: 'power3.out',
			stagger: 0.3,
		});

		tl.to(this.percentageText, {
			y: '-110%',
		});

		tl.to(this.svg, {
			y: '-110%',
		});
	}

	onLoad() {
		this.length++;
		const percentage = Math.round(this.length / this.total);
		this.percentageText.innerHTML = `${percentage * 100}%`;

		if (percentage === 1) {
			this.allLoaded();
		}
	}
}
