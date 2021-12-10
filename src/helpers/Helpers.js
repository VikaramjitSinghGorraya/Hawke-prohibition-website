import { scroller } from 'react-scroll';

const scrollTarget = (target, offset) => {
	scroller.scrollTo(target, {
		smooth: true,
		duration: 800,
		offset: offset,
	});
};
export const ScrollToPage = async (
	target,
	offset,
	currentPath,
	closeNavbar = null,
	navigation
) => {
	if (currentPath !== '/') {
		await navigation('/');
	}
	scrollTarget(target, offset);
	closeNavbar();
};
