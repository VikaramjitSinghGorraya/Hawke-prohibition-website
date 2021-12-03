import React from 'react';
import { VStack, HStack, Image, Text } from '@chakra-ui/react';

const ProductCard = ({ imageName, productName, productPrice }) => {
	return (
		<VStack
			minW={['90%', 'auto']}
			_hover={{ cursor: 'pointer' }}
			py='4'
			m='auto'
			bg='brand.bannerBg'
		>
			<VStack h='100%' w='90%'>
				<Image
					bg='transparent'
					src={imageName}
					objectFit='contain'
					h='20rem'
					w='20rem'
					m='auto'
				/>
			</VStack>
			<HStack w='100%' justifyContent='center' layerStyle='footNotes'>
				<Text as='p'>
					{productName} <br />${productPrice}/-
				</Text>
			</HStack>
		</VStack>
	);
};

export default ProductCard;
