import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='w-full max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-6 px-6 pt-24'> 
      {/* pt-24 ensures enough space below navbar */}
      
      <div className='mt-10'>  
        <Image 
          src="/pick.jpg"  
          alt="Shaista Azam"
          width={100}  
          height={100}
          className='w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg hover:scale-110 transition-transform duration-300'
        />
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-serif'>
        Hi I'm Shaista Azam 
        <Image src={assets.hand_icon} alt='' className='w-6'/>
      </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[55px] font-serif'> 
        Full Stack Web Developer Based in Islamabad
      </h1>

      <p className='max-w-2xl mx-auto font-serif'>
        I'm a passionate Full-Stack Developer & UI/UX Enthusiast with expertise in React.js, Next.js, Node.js, Express.js, and MongoDB. 
        Currently, I have completed my Bachelor's degree in Computer Science at the University of Poonch Rawalakot, Kahuta Campus. 
        I have worked on various web projects, including my final year project, "Only Lawyer App"—a complete lawyer management system that streamlines legal services for clients and law firms.
        I'm always eager to explore new technologies, take on challenging projects, and push the boundaries of web development. Let's connect and build something amazing together!
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'> 
          Contact Me 
          <Image src={assets.right_arrow_white} alt='' className='w-4 '/>
        </a>

        <a href="/sample-resume.pdf" download className='px-11 py-3 border rounded-full border-gray-500 bg-blue-800 text-white flex items-center gap-2'> 
          My Resume 
          <Image src={assets.download_icon} alt='' className='w-4 '/>
        </a>
      </div>
    </div>
  );
};

export default Header;
