import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import globalTheme from './styles';
import colorTheme from './color';

const fonts = {
	...chakraTheme.fonts,
	heading: 'Playfair Display',
};

const overrides = {
	fonts,
	colors: { ...colorTheme },
	styles: {
		...globalTheme,
		...colorTheme,
	},
};

export default extendTheme(overrides);
