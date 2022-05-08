import EventEmitter from 'events';
import gsap from 'gsap';

import {split} from 'utils/text.js';

export default class Preloader extends EventEmitter {
	constructor() {
		super();
		this.parent = document.querySelector('.preloader');
		this.percentageText = document.querySelector(
			'.preloader__number__text span span'
		);
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
				this.destroy();
				this.emit('completed');
			},
			duration: 1.5,
			ease: 'power3.out',
		});

		tl.to(this.percentageText, {
			y: '-110%',
		});

		tl.to(
			this.svg,
			{
				y: '-110%',
			},
			'<'
		);
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
