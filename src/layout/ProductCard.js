import React, { useEffect } from 'react';
import { VStack, HStack, Text } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { popOnView } from '../animations/Variants';

const MotionVStack = motion(VStack);
const ProductCard = ({ imageName, productName, productPrice }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		inView ? controls.start('visible') : controls.start('hidden');
	}, [controls, inView]);

	return (
		<MotionVStack
			minW={['90%', '55%', 'auto']}
			_hover={{ cursor: 'pointer' }}
			bg='brand.bannerBg'
			w='20rem'
			h='20rem'
			ref={ref}
			animate={controls}
			initial='hidden'
			whileHover='pop'
			variants={popOnView}
			position='relative'
		>
			<LazyLoadImage
				style={{
					objectFit: 'contain',
					minHeight: '15rem',
					maxHeight: '15rem',
				}}
				effect='blur'
				src={imageName}
			/>

			<HStack w='100%' justifyContent='center' layerStyle='footNotes'>
				<Text as='p'>
					{productName} <br />${productPrice}/-
				</Text>
			</HStack>
		</MotionVStack>
	);
};

export default ProductCard;
