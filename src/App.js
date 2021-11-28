import { VStack } from '@chakra-ui/react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
function App() {
	return (
		<VStack minH='100vh' spacing={0}>
			<VStack
				w={['90%', '95%']}
				minH='100%'
				spacing={10}
				m='auto'
				py={['5', '10']}
			>
				<Home />
				<About />
			</VStack>
		</VStack>
	);
}
export default App;
