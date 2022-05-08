import gsap from 'gsap';

export default class Navigation {
	constructor() {
		this.active = false;
	}

	show() {
		const navigation = document.querySelector('.navigation');
		gsap.set(navigation, {
			y: '-100%',
		});
		gsap.to(navigation, {
			y: `0%`,
			duration: 1.5,
			ease: 'expo.out',
			delay: 0.5,
		});
	}
	setActive(active = true) {
		const parent = document.querySelector('.navigation');

		active
			? parent.classList.add(`navigation--active`)
			: parent.classList.remove(`navigation--active`);
	}
	hide() {}

	toggle() {
		const navigationMenu = document.querySelector('.navigation__menu');

		navigationMenu.classList.toggle('active');
	}

	menuToggleHandler({hide, show}) {
		const navigation = document.querySelector('.navigation__menu__toggle');

		navigation.addEventListener('click', async (e) => {
			this.active = !this.active;

			this.active ? await hide() : await show();
			this.toggle();
		});
	}
}
