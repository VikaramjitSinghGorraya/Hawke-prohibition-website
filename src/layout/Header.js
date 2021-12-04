import React from 'react';
import { HStack, Box, Heading } from '@chakra-ui/react';

const Header = ({ text }) => {
	return (
		<HStack w='100%'>
			<Box h='1px' w='45%' border='1px solid black'></Box>
			<Heading as='h2' className='blackHeading'>
				{text}
			</Heading>
			<Box h='1px' w='45%' border='1px solid black'></Box>
			<hr />
		</HStack>
	);
};

export default Header;
