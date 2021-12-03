const buttonTheme = {
	baseStyle: {
		_hover: {
			bg: 'brand.white',
			color: 'brand.golden',
			border: '1px solid #bfa25a',
		},
		_focus: {
			boxShadow: 'none',
			outline: 'none',
		},
		color: 'brand.white',
		bg: 'brand.golden',
		borderRadius: '5px',
		border: '1px',
		fontWeight: ['300', '100', '100', '100'],
		padding: '5',
	},
	defaultProps: {
		variant: null,
	},
};
export default buttonTheme;
