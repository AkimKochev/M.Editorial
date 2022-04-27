import gsap from 'gsap';

import Home from './pages/Home/index.js';

class App {
	constructor() {
		this.createPages();
	}

	createPages() {
		this.pages = {
			home: new Home(),
		};
	}
}

new App();
