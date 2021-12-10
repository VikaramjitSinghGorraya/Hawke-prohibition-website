import React from 'react';
import { Stack, HStack, useMediaQuery } from '@chakra-ui/react';
import AboutVideo from '../pictures/AboutVideo.mp4';
import Banner from '../layout/Banner';

const AboutSection = () => {
	const [isSmallerThan760] = useMediaQuery('(max-width: 760px)');

	const AboutUsHeading = () => {
		return <>Who are we?</>;
	};

	const AboutUsText = () => {
		return (
			<>
				Hawke Prohibition is your one-stop shop solution, offering everything
				that you need for distillation and brewing in Canada. We are the Alberta
				Spirit Award winner of 2021 and offer locally made premium quality
				Vodka.
			</>
		);
	};
	const showBackgroundImage = () => {
		return (
			<HStack h='100%' w='100%' position='absolute' bg='gray'>
				(
				<video className='videoStyle' autoPlay muted loop>
					<source src={AboutVideo} type='video/mp4'></source>
				</video>
				)
			</HStack>
		);
	};

	return (
		<Stack
			direction={['column', 'row']}
			color='brand.white'
			zIndex='1'
			position='relative'
		>
			{showBackgroundImage()}
			<Banner
				aboutUsBanner={true}
				aboutUsHeading={AboutUsHeading()}
				aboutUsText={AboutUsText()}
			/>
		</Stack>
	);
};

export default AboutSection;
