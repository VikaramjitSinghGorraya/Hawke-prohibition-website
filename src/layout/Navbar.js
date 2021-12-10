import React from 'react';
import {
	HStack,
	VStack,
	Image,
	Drawer,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Button,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import LogoImage from '../pictures/Logo.png';
import Logo from './Logo';
import { ScrollToPage } from '../helpers/Helpers';
const Navbar = ({ navigation }) => {
	const location = useLocation();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const [isLessThan768] = useMediaQuery('(max-width: 768px)');

	const listItems = () => {
		return (
			<>
				<Link
					className='smoothLink '
					onClick={() =>
						ScrollToPage('home', -300, location.pathname, onClose, navigation)
					}
				>
					HOME
				</Link>
				<Link
					className='smoothLink '
					onClick={() =>
						ScrollToPage('about', -120, location.pathname, onClose, navigation)
					}
				>
					ABOUT
				</Link>
				<Link
					className='smoothLink '
					onClick={() =>
						ScrollToPage(
							'spirits',
							-200,
							location.pathname,
							onClose,
							navigation
						)
					}
				>
					SPIRITS
				</Link>
				<RouterLink to='/Cart'>CART</RouterLink>
			</>
		);
	};

	const desktopNavbar = () => {
		return (
			<VStack w='100%' justifyContent='center' spacing={20}>
				<HStack
					position='fixed'
					bg='brand.navbar'
					top='0'
					w='100%'
					spacing={10}
					justifyContent='center'
					className='navbar'
				>
					{listItems()}
				</HStack>
				<Logo />
			</VStack>
		);
	};

	const navbarDrawer = () => {
		return (
			<>
				<Button
					ref={btnRef}
					bg='transparent'
					color='rgb(0, 0, 0)'
					onClick={onOpen}
				>
					<HamburgerIcon w={7} h={7} />
				</Button>
				<Drawer
					isOpen={isOpen}
					placement='left'
					onClose={onClose}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent maxW='70%'>
						<DrawerHeader>
							<HStack w='100%' justifyContent='center'>
								<p>Locally Made</p>
							</HStack>
						</DrawerHeader>

						<VStack w='100%' h='80%' spacing={10} py='10'>
							{listItems()}
						</VStack>

						<DrawerFooter>
							<Image src={LogoImage} h='150px' w='150px' m='auto' />
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</>
		);
	};
	const mobileNavabar = () => {
		return (
			<HStack
				position='sticky'
				top='0'
				w='100%'
				justifyContent='space-between'
				className='navbar'
			>
				{navbarDrawer()}
				<Image src={LogoImage} h='3.8em' w='3.8em' />
			</HStack>
		);
	};
	return <>{isLessThan768 ? mobileNavabar() : desktopNavbar()}</>;
};

export default Navbar;
