import React from 'react';
import { FaGlobeAmericas } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

const footer = () => {
  return (
    <div className='bg-[#f2f2f2] py-10'>
    <div className='mx-4 flex flex-col gap-2'>
        <p className='text-[14px] flex items-center gap-1'>
            <FaGlobeAmericas className='text-[20px]' />
            English (United State))
        </p>

        <div className='text-[14px] flex items-center gap-1'>
        <FaToggleOff className='text-blue-600 text-[20px]' />
            Your Privacy Choices
        </div>
        <p className='text-[14px]'>
            Consumer  Health policy
        </p>
        </div>
        <div className='mx-4 flex gap-3 lg:float-end'>
            <p className='text-[13px]'>Privacy & cookies</p>
            <p className='text-[13px]'>Terms of use</p>
            <p className='text-[13px]'>Contact us</p>
            <p className='text-[13px]'>Feedback</p>
            <p className='text-[13px]'>Microsoft 2024</p>
        </div>
    </div>

  );
};

export default footer;
