import { memo } from 'react';
import Styled from 'styled-components';
import './Style.scss';
import NavBar from './components/NavBar';

function App() {
	return (
		<Container id={'app'}>
			<NavBar />
		</Container>
	);
}

const Container = Styled.div``;

export default memo(App);
