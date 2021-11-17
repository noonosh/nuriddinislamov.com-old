import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} exact path='/' />
				<Route element={<About />} path='/about' />
				<Route element={<Skills />} path='/skills' />
				<Route element={<Contact />} path='/contact' />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
