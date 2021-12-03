import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import ProductCard from '../layout/ProductCard';
import Product1 from '../pictures/Product1.jpg';
import Product2 from '../pictures/Product2.jpg';
import Product3 from '../pictures/Product3.jpg';

const Spirits = () => {
	return (
		<VStack w='100%'>
			<HStack
				className='productContainerScrollBar'
				spacing={10}
				w='100%'
				overflowX='auto'
			>
				<ProductCard
					imageName={Product1}
					productName='Baby-X-Vodka'
					productPrice='25'
				/>
				<ProductCard
					imageName={Product2}
					productName='Sir Peri Winkles'
					productPrice='32'
				/>
				<ProductCard
					imageName={Product3}
					productName='Williams London Dry Gin'
					productPrice='28'
				/>
			</HStack>
		</VStack>
	);
};
export default Spirits;
