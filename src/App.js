import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact.js';
import NotFound from './components/NotFound';
// import Maintenance from './components/Maintenance';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		// <div>
		// 	<Maintenance />
		// </div>
		<main>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/me' element={<About />} />
					<Route path='/projects' element={<Work />} />
					<Route path='/reach-out' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
};

export default App;
