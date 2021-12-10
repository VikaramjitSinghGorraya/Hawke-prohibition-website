import { VStack } from '@chakra-ui/react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LearnMore from './pages/LearnMore';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
	const navigate = useNavigate();
	return (
		<VStack minH='100vh' spacing={5}>
			<Navbar navigation={navigate} />
			<VStack w={['90%', '95%']} minH='100%' m='auto' py={['5', '10']}>
				<Routes>
					<Route path='/LearnMore' element={<LearnMore />} />
					<Route path='/Cart' element={<Cart />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</VStack>
			<Footer />
		</VStack>
	);
}
export default App;
