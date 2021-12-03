import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import globalTheme from './globalStyles';
import colorTheme from './color';
import buttonTheme from './components/Button';
import borderTheme from './components/Border';
import layerTheme from './layerStyles';

const fonts = {
	...chakraTheme.fonts,
	heading: 'Playfair Display',
};

const overrides = {
	fonts,
	colors: { ...colorTheme },
	layerStyles: {
		...layerTheme,
	},
	styles: {
		...globalTheme,
		...colorTheme,
	},
	components: {
		Button: {
			...buttonTheme,
		},
		Border: {
			...borderTheme,
		},
	},
};

export default extendTheme(overrides);
