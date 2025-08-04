import Theme from '@swup/theme';
import styles from './index.css';

type Options = {
	mainElement: string;
};

export default class SwupFadeTheme extends Theme {
	name = 'SwupFadeTheme';

	defaults: Options = {
		mainElement: '#swup'
	};
	options: Options;

	constructor(options: Partial<Options> = {}) {
		super();
		this.options = { ...this.defaults, ...options };
	}

	mount() {
		this.applyStyles(styles);
		this.addClassName(this.options.mainElement, 'main');
	}
}
