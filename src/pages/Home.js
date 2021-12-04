import React from 'react';
import { VStack, HStack } from '@chakra-ui/react';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import SpiritsSection from './SpiritsSection';
import Header from '../layout/Header';
const Home = () => {
	return (
		<VStack w='100%' spacing={10}>
			<HStack w='100%' id='home'>
				<HomeSection />
			</HStack>
			<HStack w='100%' id='about'>
				<AboutSection />
			</HStack>
			<Header text='SPIRITS' />
			<HStack w='100%' id='spirits'>
				<SpiritsSection />
			</HStack>
		</VStack>
	);
};

export default Home;
