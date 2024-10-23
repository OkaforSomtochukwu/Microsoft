import React from 'react';
import { Link } from "react-router-dom";

const Call = () => {
  return (
    <section className="py-16 w-full">
      <div className="flex flex-col w-auto h-auto max-w-] box-border items-center text-center p-5 gap-7">
        <img src='https://assets.account.microsoft.com/signedout/compassassets/817d44a7-5543-4d3c-b441-e2ab807f3a8c.svg?n=microsoft_icon.svg' />

        <p className="font-sans text-[14px] lg:text-[24px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased p-1">Your Microsoft account connects all your Microsoft apps and services.</p>


        <div className='flex gap-5'>
        <Link to="/login">
        <button className='mt-5 outline-transparent relative font-sans antialiased text-[14px] font-normal border border-transparent rounded-md box-border cursor-pointer inline-block px-3 text-decoration-none text-center min-w-[80px] h-auto bg-[rgb(0,111,201)] text-[rgb(242,242,242)] min-h-[32px] select-none'>
          Sign in
        </button>
        </Link>
            <button className='mt-5 outline-transparent relative font-sans antialiased text-[14px] font-normal border border-black border-spacing-4 rounded-md box-border cursor-pointer inline-block px-3 text-decoration-none text-center min-w-[80px] h-auto bg-[rgb(255,255,255)] text-[rgb(0,0,0)] min-h-[32px] select-none'>
            Create Account
            </button>
        </div>
      </div>
    </section>
  );
};

export default Call;
