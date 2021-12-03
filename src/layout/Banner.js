import React from 'react';
import {
	Heading,
	Text,
	Box,
	HStack,
	Flex,
	VStack,
	Image,
	Button,
} from '@chakra-ui/react';
import BannerImage from '../pictures/BannerImage.png';
const Banner = ({
	aboutUsBanner = false,
	aboutUsHeading,
	homeIntroHeading,
	aboutUsText,
	homeIntroText,
}) => {
	return (
		<Flex
			h={['100%', '70vh']}
			w='100%'
			direction={aboutUsBanner ? ['column', 'row'] : 'row'}
			justifyContent='space-around'
			alignItems='center'
			zIndex='1'
			py='5'
		>
			<HStack
				w={aboutUsBanner ? '' : '75%'}
				h='100%'
				justifyContent='center'
				textAlign='center'
			>
				{aboutUsBanner ? (
					<Heading as='h2'>{aboutUsHeading}</Heading>
				) : (
					<Image src={BannerImage} objectFit='contain' h='100%' />
				)}
			</HStack>
			{aboutUsBanner ? (
				<Box h={['0', '70%']} w={['70%', '0']} border='0.5px solid white'></Box>
			) : (
				''
			)}
			<VStack
				h='100%'
				w={['90%', aboutUsBanner ? '60%' : '']}
				textAlign='center'
				justifyContent='center'
			>
				<Heading as='h2'>{aboutUsBanner ? '' : homeIntroHeading}</Heading>
				<Text as='p' color={aboutUsBanner ? 'brand.white' : 'brand.golden'}>
					{aboutUsBanner ? aboutUsText : homeIntroText}
				</Text>
				{aboutUsBanner ? '' : <Button>BUY NOW</Button>}
			</VStack>
		</Flex>
	);
};

export default Banner;
