import React from 'react';
import { GoPersonAdd } from "react-icons/go";
import { FaGripLines } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { PiLineVerticalBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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

            <Link to="/login" className='flex items-center gap-2'>
              <button className='hidden lg:block'>  Sign In
              <CgProfile className='text-[25px]' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
