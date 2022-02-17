import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maintenance from './Maintenance';
import Layout from './Layout';
// import Home from './components/Home';
// import About from './components/About';
// import Skills from './components/Skills';
// import Contact from './components/Contact';

function App() {
	return (
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route element={<Maintenance />} exact path='/' />
		// 		{/* <Route element={<Home />} exact path='/' /> */}
		// 		{/* <Route element={<About />} path='/about' /> */}
		// 		{/* <Route element={<Skills />} path='/skills' /> */}
		// 		{/* <Route element={<Contact />} path='/contact' /> */}
		// 	</Routes>
		// </BrowserRouter>
		<Layout>
			<Maintenance />
		</Layout>
	);
}

export default App;
