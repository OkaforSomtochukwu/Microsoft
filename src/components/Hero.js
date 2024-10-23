import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 w-full mb-32">
      <div className="flex flex-col w-auto h-auto max-w-] box-border items-center text-center p-5">
        <h2 className="font-sans text-[32px] lg:text-[64px] font-semibold text-[rgb(50,49,48)] inline leading-[1.4] antialiased">It's all here with Microsoft account</h2>
        <p className="font-sans text-[14px] lg:text-[24px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased p-1">Your Microsoft account connects all your Microsoft apps and services.</p>
        <p className="font-sans text-[14px] lg:text-[24px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased">Sign in to manage your account.</p>

        <Link to="/login">
        <button className='mt-5 outline-transparent relative font-sans antialiased text-[14px] font-normal border border-transparent rounded-md box-border cursor-pointer inline-block px-3 text-decoration-none text-center min-w-[80px] h-auto bg-[rgb(0,111,201)] text-[rgb(242,242,242)] min-h-[32px] select-none'>
          Sign in
        </button>
        </Link>
      </div>

      <div className=' relative'>
        <img src='https://assets.account.microsoft.com/signedout/compassassets/dedf495e-92fa-4cec-aaf3-c127d310da74.png?n=OneDrive_1920x960.png' className='bg-blue-300' />
      </div>
      <div className='bg-white p-16 rounded-full  h-[200px] w-[200px] absolute top-[975px] left-[45%]'>
          <img src='https://assets.account.microsoft.com/signedout/compassassets/9e4ea4f6-307f-412f-886c-3bd290f54b40.jpg?n=Microsoft%20Logo.jpg' className='w-[200px] h-auto'/>
        </div>
    </section>
  );
};

export default Hero;
