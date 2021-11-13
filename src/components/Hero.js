import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
	return (
		<>
			<header>
				<div className='grid grid-cols-2 font-thin tracking-widest text-xl'>
					<div className='m-9'>
						<span>@nuriddinislamov</span>
					</div>
					<div className='m-9 text-right'>
						<img
							src='../icons/hamburger.svg'
							alt='Hamburger icon'
							className='hidden'
						/>
						<ul>
							<li className='pb-3'>
								<a href='#about'>About</a>
							</li>
							<li className='pb-3'>
								<a href='#skills'>Skills</a>
							</li>
							<li className='pb-3'>
								<a href='#contact'>Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<section>
				<div className='mt-8 px-5 text-6xl font-bold pb-4'>
					<Typewriter
						onInit={typewriter => {
							typewriter
								.typeString('Hi ')
								.pasteString('<code>&#128075;</code></br>')
								.typeString('<span>I am Nuriddin,</span>')
								.pauseFor(2000)
								.pasteString('<br/>')
								.typeString(
									'<span class="text-gray-400 software-engineer">Software Deve</span>',
								)
								.pauseFor(1000)
								.deleteChars(4)
								.typeString(
									'<span class="text-gray-400 software-engineer">Engineer</span>',
								)
								.start();
						}}
					/>
					{/* <h1>
							Hi 👋
							<br />
							I'm Nuriddin,
							<br />
							Software Developer
						</h1> */}
				</div>
			</section>
		</>
	);
};

export default Hero;
