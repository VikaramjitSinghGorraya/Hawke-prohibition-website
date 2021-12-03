import { VStack } from '@chakra-ui/react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Spirits from './pages/Spirits';
import Header from './layout/Header';

function App() {
	return (
		<VStack minH='100vh' spacing={5}>
			<Navbar />
			<VStack
				w={['90%', '95%']}
				minH='100%'
				spacing={10}
				m='auto'
				py={['5', '10']}
			>
				<Home />
				<About />
				<Header text='SPIRITS' />
				<Spirits />
			</VStack>
			<Footer />
		</VStack>
	);
}
export default App;
