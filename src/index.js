import Theme from '@swup/theme';
import styles from './index.css';

export default class SwupFadeTheme extends Theme {
	name = 'SwupFadeTheme';

	defaults = {
		mainElement: '#swup'
	};

	constructor(options = {}) {
		super();
		this.options = { ...this.defaults, ...options };
	}

	mount() {
		this.applyStyles(styles);
		this.addClassName(this.options.mainElement, 'main');
	}
}
