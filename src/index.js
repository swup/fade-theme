import Theme from '@swup/theme';
import styles from './index.css';

export default class SwupFadeTheme extends Theme {
	name = 'SwupFadeTheme';

	constructor(options) {
		super();

		const defaultOptions = {
			mainElement: '#swup'
		};

		this.options = {
			...defaultOptions,
			...options
		};
	}

	mount() {
		this.applyStyles(styles);
		this.addClassName(this.options.mainElement, 'main');
	}
}
