import React from 'react';
import { VStack, HStack, Text, Box } from '@chakra-ui/react';
import LearnMore1 from '../pictures/LearnMore1.jpg';
import LearnMore2 from '../pictures/LearnMore2.jpg';
import Header from '../layout/Header';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const LearnMore = () => {
	return (
		<VStack w='100%'>
			<Header text='US' />
			<Box w={['100%', '100%', '100%', '50%']} h='30%'>
				<LazyLoadImage
					effect='blur'
					height='100%'
					alt='our image'
					width='100%'
					src={LearnMore1}
				/>
			</Box>

			<HStack
				w={['100%', '100%', '100%', '50%']}
				textAlign='left'
				layerStyle='footNotes'
			>
				<Text as='p'>
					We like to keep everything simple at Hawke Prohibition Distilleries,
					our mission statement is this. Be cool, Enjoy, Have fun. We feel this
					covers all aspects of our life as well as business. We officially
					opened in 2016 building our own custom copper stills. Things escalated
					quickly and began importing equipment from overseas to supply Canada
					with small and large scale distillation equipment.
				</Text>
			</HStack>
			<Header text='Products' />

			<Box w={['100%', '100%', '100%', '50%']} minH='30%'>
				<LazyLoadImage
					effect='blur'
					height={'100%'}
					alt='products image'
					width='100%'
					src={LearnMore2}
				/>
			</Box>

			<HStack
				w={['100%', '100%', '100%', '50%']}
				textAlign='left'
				layerStyle='footNotes'
			>
				<Text as='p'>
					Our Distillery first serviced the Sherwood Park area, then onto
					Edmonton and surrounding. Then Calgary and Southern Alberta and can
					Proudly say, the fine people of Saskatchewan now are tasting our award
					winning baby-X-vodka. We plan on being an international brand built,
					loved, designed right here in small town Alberta. Hawke Prohibition
					Distilleries offers An Alberta Spirit Awards gold metal baby-X-vodka.
					Williams London Dry Gin as well as our new star Sir Peri Winkle's
					purple gin. Each spirit and every spirit moving forward will always be
					considerate history and the alchemy that goes with the process. We
					absolutely love what we do and we invite our beloved customers to
					continue this journey with us.
				</Text>
			</HStack>
		</VStack>
	);
};

export default LearnMore;
