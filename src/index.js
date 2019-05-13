import Theme from '@swup/theme';
import styles from './index.css';

export default class FadeTheme extends Theme {
	name = 'FadeTheme';

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
