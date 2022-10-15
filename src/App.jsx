import { memo } from 'react';
import Styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Style.scss';
import NavBar from './components/NavBar';

function App() {
	return (
		<BrowserRouter>
			<Container id={'app'}>
				<NavBar />
				<Routes>
					<Route
						path={'/*'}
						element={
							<img
								src="/Logo.svg"
								alt="Logo"
							/>
						}
					/>
				</Routes>
			</Container>
		</BrowserRouter>
	);
}

const Container = Styled.div``;

export default memo(App);
