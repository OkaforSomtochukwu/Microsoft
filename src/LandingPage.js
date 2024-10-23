import React from "react";
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/FeatureSection';
import Solutions from './components/Solutions';
import Questions from './components/Questions';
import Support from './components/Support';
import Call from './components/CallToAction';
import Footer from './components/Footer';

import { FaGripLines } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { PiLineVerticalBold } from "react-icons/pi";


const Landingpage = () => {
  return (
 <div>
    <nav className="bg-white text-gray-600 fixed w-full h-16">
      <div className="flex justify-between items-center p-4">
        <div className='flex gap-4 lg:hidden'>
          <FaGripLines className='text-[25px]' />
          <IoMdSearch className='text-[25px]' />
        </div>
        
        <div className="hidden lg:flex items-center lg:float-start mb-4 gap-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" className="h-7" />
          <h2 className='text-[22px]'>Microsoft</h2>
          <PiLineVerticalBold className='text-[22px]'/>
          <h2 className='text-black text-[22px] font-semibold'>Account</h2>
          <p className='text-[15px]'>Help</p>
        </div>

        <div className='lg:hidden flex items-center gap-1'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" className="h-7" />

          <h2 className='text-[20px]'>Microsoft</h2>
        </div>

        <div  className='flex lg:float-end'>
          <div className='flex gap-4 justify-between'>
            <div className='hidden lg:flex items-center gap-2'>
              <p>Search</p>
              <IoMdSearch className='text-[25px]' />
            </div>

            <div className='flex items-center gap-2'>
              <p className='hidden lg:block'>Sign In</p>
              <CgProfile className='text-[25px]' />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <Hero />
      <Products />
      <Solutions />
      <Support />
      <Call />
      <Questions />
      <Footer />
    </div>
    </div>
  );
  
}

export default Landingpage;
