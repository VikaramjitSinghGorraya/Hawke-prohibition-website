const buttonTheme = {
	baseStyle: {
		_hover: {
			bg: 'brand.black',
			color: 'brand.white',
			border: '0.5px solid black',
		},
		_focus: {
			boxShadow: 'none',
			outline: 'none',
		},
		color: 'brand.black',
		bg: 'brand.white',
		borderRadius: '5px',
		border: '0.5px solid transparent',
		fontWeight: ['300', '100', '100', '100'],
		padding: '5',
	},
	defaultProps: {
		variant: null,
	},
};
export default buttonTheme;
