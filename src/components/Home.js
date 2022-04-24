import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';
import Maintenance from './Maintenance';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import homePage from '../pages/home.md';
import useWindowDimensions from '../lib/windowDimensions';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<div>
				<h2>{this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}

const Home = () => {
	const [content, setContent] = useState('');
	const { width } = useWindowDimensions();

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
			<Maintenance />
			{/* <h1 class='text-4xl font-light'>Home</h1>
			<div class='text-2xl font-bold'>
				<Clock />
			</div> */}
			{width >= 768 ? (
				<div class='absolute bottom-1 left-0 -z-10 w-screen'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1440 320'
						className='fill-slate-100'>
						<path d='M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,181.3C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path>
					</svg>
				</div>
			) : null}
			<Navigation
				prev={{ name: '', path: '' }}
				next={{ name: 'about', path: '/me' }}
			/>
		</Layout>
	);
};

export default Home;
