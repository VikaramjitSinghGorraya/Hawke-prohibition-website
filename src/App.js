import { VStack } from '@chakra-ui/react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LearnMore from './pages/LearnMore';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';

function App() {
	return (
		<VStack minH='100vh' spacing={5}>
			<Navbar />
			<VStack w={['90%', '95%']} minH='100%' m='auto' py={['5', '10']}>
				<Routes>
					<Route path='/LearnMore' element={<LearnMore />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</VStack>
			<Footer />
		</VStack>
	);
}
export default App;
