import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import homePage from '../pages/home.md';

const Home = () => {
	const [content, setContent] = useState('');

	useEffect(() => {
		fetch(homePage)
			.then(res => res.text())
			.then(text => setContent(text));
	}, []);

	return (
		<Layout id='home'>
			<a
				className='bg-red-600 absolute rotate-90 block -right-28 text-center top-20 bold font-bold text-sm text-white shadow-md py-1 px-24 z-20'
				href='http://github.com/nuriddinislamov/nuriddinislamov.com'
				target='_blank'
				rel='noopener noreferrer'
				id='github'>
				Fork me on Github
			</a>
			<div className='flex flex-col h-full'>
				<div className='flex-auto overflow-scroll prose'>
					<ReactMarkdown children={content} remarkPlugins={remarkGfm} />
				</div>
				<Navigation
					prev={{ name: '', path: '' }}
					next={{ name: 'about', path: '/me' }}
				/>
			</div>
		</Layout>
	);
};

export default Home;
