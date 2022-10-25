import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import useWindowDimensions from "../lib/windowDimensions";
import helloImage from "../assets/hello.jpeg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
	const { width } = useWindowDimensions();

	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);

	return (
		<Layout id='home' isHome={true}>
			<a
				className='bg-red-600 absolute rotate-90 block -right-28 text-center top-20 bold font-bold text-sm text-white shadow-md py-1 px-24 z-40'
				href='http://github.com/nuriddinislamov/nuriddinislamov.com'
				target='_blank'
				rel='noopener noreferrer'
				id='github'>
				Fork me on Github
			</a>

			<div className='flex flex-col h-full items-center justify-between md:justify-center'>
				<div
					data-aos='fade-in'
					className='grid grid-flow-row mb-16 md:grid-cols-2 gap-8 items-center justify-items-center md:justify-items-start p-4'>
					<img
						src={helloImage}
						alt='Nuriddin waving memoji'
						className='self-center w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-xl object-cover'
					/>
					<div className='text-left'>
						<h2 className='font-extrabold text-5xl mb-3'>Hey, friend</h2>
						<p className='text-xl mb-3'>
							Nice to have your here – in my little corner of the world.
							<br />I am a Software Engineer and I build stuff for people
						</p>
						<Link
							to='/me'
							className='text-xl mt-6 md:mt-0 md:text-lg inline-block hover:text-sky-500 underline underline-offset-2 hover:transition-colors duration-200'>
							Continue reading &rarr;
						</Link>
					</div>
				</div>
				{width >= 768 ? (
					<div className='absolute bottom-1 left-0 -z-10 w-screen'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 1440 320'
							className='fill-slate-100'>
							<path d='M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,181.3C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path>
						</svg>
					</div>
				) : null}
			</div>
		</Layout>
	);
};

export default Home;
