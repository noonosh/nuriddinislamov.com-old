import React from "react";
import useWindowDimensions from "../lib/windowDimensions";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const NavBar = () => {
	const { width } = useWindowDimensions();

	return (
		<header className='md:sticky w-full top-0 z-30'>
			<Banner />
			<nav className='pt-2 md:pt-4 px-24 bg-white w-full bg-opacity-90 backdrop-blur-md'>
				<div className='flex flex-col items-center md:flex-row md:justify-between border-b pb-4'>
					<div className='text-center md:text-left'>
						<h1 className='font-extrabold text-2xl md:text-4xl md:self-center md:mb-0 inline-block'>
							<Link to='/' className='link'>
								{width >= 768 ? "Nuriddin Islamov" : "Nuriddin"}
							</Link>
						</h1>
						<p className='font-light text-base md:text-base'>
							Software Engineer
						</p>
					</div>

					<ul className='md:flex text-lg font-medium hidden whitespace-nowrap'>
						<li className='nav_item'>
							<Link className='link' to='/me'>
								me
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='link' to='/c'>
								get in touch
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
