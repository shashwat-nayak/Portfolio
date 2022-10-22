import { memo } from 'react';
import Styled from 'styled-components';
import './Style.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
	return (
		<Container id={'app'}>
			<NavBar />
			<Home />
			<About />
			<Portfolio />
			<Experience />
			<Contact />
		</Container>
	);
}

const Container = Styled.div``;

export default memo(App);
