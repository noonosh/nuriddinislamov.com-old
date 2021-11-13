import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
// import Skills from './components/Skills';
// import Links from './components/Links';
// import Contact from './components/Contact';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Hero />} path='/' />
				<Route element={<About />} path='/about' />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
