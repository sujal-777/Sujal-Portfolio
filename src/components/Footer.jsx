import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

// for printing whole year 
const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 p-6' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-8'>
				<p className='text-white text-center w-full lg:w-auto font-light text-lg'>© {year} Sujal. All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					
					<a href="mailto:palsujal707@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiMail className='text-xl' />
					</a>
					<a href="https://x.com/SujalPa56707420?s=09" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FaTwitter className='text-xl' />
					</a>
					<a href="https://www.linkedin.com/in/sujal-pal/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://github.com/sujal-777" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGithub className='text-xl' />
					</a>
					<a href="https://medium.com/@goudnithin77" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillMediumCircle className='text-xl' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;