import React from 'react';
import { HStack, Heading, Image } from '@chakra-ui/react';
import LogoImage from '../pictures/Logo.jpg';
const Logo = () => {
	return (
		<HStack w='100%' justifyContent='center' spacing={6}>
			<Heading as='h1'>Proudly Albertan</Heading>
			<Image
				src={LogoImage}
				objectFit='contain'
				h='8vw'
				w='8vw'
				cursor='pointer'
				onClick={() => (window.location = '/')}
			/>
			<Heading as='h1'>Purely Organic &nbsp;&nbsp;</Heading>
		</HStack>
	);
};

export default Logo;
