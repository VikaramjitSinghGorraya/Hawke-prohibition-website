import React from 'react';
import { HStack } from '@chakra-ui/react';
import ProductCard from '../layout/ProductCard';
import Product1 from '../pictures/BannerImage.png';
import Product2 from '../pictures/Product2.png';
import Product3 from '../pictures/Product3.png';

const SpiritsSection = () => {
	return (
		<HStack
			className='productContainerScrollBar'
			justifyContent={[null, null, 'space-around']}
			w='100%'
			h='100%'
			overflow='hidden'
			overflowX='scroll'
			py='5'
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
	);
};
export default SpiritsSection;
