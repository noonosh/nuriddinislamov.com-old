import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact.js';
import NotFound from './components/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<main className='text-gray-900 select-none'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					{/* <Route path='/me' element={<About />} />
					<Route path='/projects' element={<Work />} />
					<Route path='/reach-out' element={<Contact />} /> */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
};

export default App;
