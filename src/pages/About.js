import React from 'react';
import { Stack, HStack } from '@chakra-ui/react';
import BackgroundVideo from '../pictures/vvideo.mp4';
import Banner from '../layout/Banner';

const About = () => {
	const AboutUsHeading = () => {
		return <>Who are we?</>;
	};

	const AboutUsText = () => {
		return (
			<>
				Hawke Prohibition is your one-stop shop solution, offering everything
				that you need for distillation and brewing in Canada. We are the
				BackgroundVideoen Spirit award winner of 2021 and offer locally made
				premium quality Vodka.
			</>
		);
	};
	const showBackgroundImage = () => {
		return (
			<HStack h='100%' w='100%' position='absolute'>
				<video autoPlay loop muted className='videoStyle'>
					<source src={BackgroundVideo} type='video/mp4' />
				</video>
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

export default About;
