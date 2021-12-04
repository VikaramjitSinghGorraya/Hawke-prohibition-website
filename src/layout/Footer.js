import React from 'react';
import { HStack, Flex, VStack, Text, Image } from '@chakra-ui/react';
import Instagram from '../pictures/Instagram.svg';
import Facebook from '../pictures/Facebook.svg';

const Footer = () => {
	return (
		<Flex
			direction={['column', 'row']}
			w='100%'
			h='100%'
			py='5'
			justifyContent='space-between'
			bg='#393e46'
		>
			<VStack w='100%' layerStyle='footHeading'>
				<Text as='p'>LOCATION</Text>
				<HStack layerStyle='footNotes'>
					<Text as='p'>
						426 Kaska Road, Sherwood Park, <br /> Alberta T8A 4G8
					</Text>
				</HStack>
			</VStack>

			<VStack w='100%' layerStyle='footHeading'>
				<Text as='p'>CONTACT</Text>
				<VStack spacing={0} layerStyle='footNotes'>
					<Text as='p'>
						<a href='tel:+4733378901'>780-449-5331</a>
					</Text>
					<Text As='p'>
						<a href='mailto: info@hawkepro.com'>info@hawkepro.com</a>
					</Text>
				</VStack>
			</VStack>
			<VStack w='100%' layerStyle='footHeading'>
				<Text as='p'>SOCIAL MEDIA</Text>
				<HStack w='100%' justifyContent='center ' layerStyle='footNotes'>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://www.instagram.com/hawkeprohibitiondistilleries/'
					>
						<Image src={Instagram} h='1.6rem' w='1.6rem' />
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://www.facebook.com/HawkeProhibition'
					>
						<Image src={Facebook} h='1.6rem' w='1.6rem' />
					</a>
				</HStack>
			</VStack>
		</Flex>
	);
};

export default Footer;
