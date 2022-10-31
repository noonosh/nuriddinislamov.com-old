import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
	return (
		<a
			href='https://read.nuriddinislamov.com/'
			className='block w-screen bg-blue-600 py-2 sticky top-0 left-0 hover:underline underline-offset-2 text-white'>
			<h4 className='uppercase text-center animate__animated animate-pulse'>
				Read more posts on my blog page
				<FontAwesomeIcon icon={faArrowRight} className='ml-3' />
			</h4>
		</a>
	);
};

export default Banner;
