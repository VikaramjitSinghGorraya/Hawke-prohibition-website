import React from 'react';
import { VStack } from '@chakra-ui/react';
import Banner from '../layout/Banner';

const HomeSection = () => {
	const homeIntroHeading = () => {
		return (
			<>
				It's <span>here!</span>
			</>
		);
	};
	const homeIntroText = () => {
		return (
			<>
				Sherwood Park's very own premium Vodka. <br />
				Made local, tastes international.
			</>
		);
	};
	return (
		<VStack w='100%' spacing={6} bg='brand.bannerBg'>
			<Banner
				homeIntroText={homeIntroText()}
				homeIntroHeading={homeIntroHeading()}
			/>
		</VStack>
	);
};

export default HomeSection;
