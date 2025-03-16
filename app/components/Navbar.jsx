'use client';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [IsScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 h-16 ${IsScroll ? "bg-blue-300 bg-opacity-50 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>
        <a href="#top" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-all">
          Shaista <span className="text-black">Azam</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-amber-50 shadow-sm bg-opacity-50">
          <li className="bg-amber-300 border-4 border-blue-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-amber-400 transition">
            <a className="font-serif" href="#top">Home</a>
          </li>
          <li className="bg-green-300 border-4 border-green-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-green-400 transition">
            <a className="font-serif" href="#about">About me</a>
          </li>
          <li className="bg-purple-300 border-4 border-purple-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-purple-400 transition">
            <a className="font-serif" href="#services">Services</a>
          </li>
          <li className="bg-pink-300 border-4 border-pink-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-pink-400 transition">
            <a className="font-serif" href="#work">My Work</a>
          </li>
          <li className="bg-red-300 border-4 border-red-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-red-400 transition">
            <a className="font-serif" href="#contact">Contact me</a>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='' className='w-6'/>
          </button>
          <a href="#contact" className='hidden lg:flex items-center bg-amber-100 gap-3 px-10 py-2 border border-blue-500 rounded-full hover:bg-blue-400 transition ml-4'>
            Contact <Image src={assets.arrow_icon} alt="arrow" className='w-3'/>
          </a>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6'/>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-10 px-6 fixed right-[-16rem] top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li className="bg-amber-300 border-4 border-blue-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-amber-400 transition">
            <a className="font-serif" onClick={closeMenu} href="#top">Home</a>
          </li>
          <li className="bg-green-300 border-4 border-green-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-green-400 transition">
            <a className="font-serif" onClick={closeMenu} href="#about">About me</a>
          </li>
          <li className="bg-purple-300 border-4 border-purple-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-purple-400 transition">
            <a className="font-serif" onClick={closeMenu} href="#services">Services</a>
          </li>
          <li className="bg-pink-300 border-4 border-pink-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-pink-400 transition">
            <a className="font-serif" onClick={closeMenu} href="#work">My Work</a>
          </li>
          <li className="bg-red-300 border-4 border-red-500 rounded-xl px-4 py-2 text-center shadow-md hover:bg-red-400 transition">
            <a className="font-serif" onClick={closeMenu} href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
