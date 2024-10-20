import React from 'react';
import SafeGuard from "../assets/privacy.png";

const Solutions = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col justify-center items-center mb-10">
        <h2 className="font-sans text-[24px] lg:text-[64px] font-semibold text-[rgb(50,49,48)] inline leading-[1.4] antialiased mb-4">Uniquely yours</h2>
        <p className="font-sans text-[14px] lg:text-[24px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased text-center mx-3 px-10 py-2">Take control of your data with privacy settings you can customize, and get personalized recommendations from your account checkup.</p>
      </div>

      <div className='flex flex-col justify-center items-center mx-12 lg:mx-28'>
        <div className='flex flex-col lg:flex-row-reverse w-auto h-auto box-border items-center mb-10'>
          <div className='w-[80%] lg:w-[50%]'>
            <img class="block opacity-100 w-full h-full object-cover rounded-lg overflow-clip overflow-clip-margin mb-5 lg:h-[450px]" src={SafeGuard}/>
          </div>
          <div className='font-sans text-[14px] font-normal h-auto w-[calc(80%-8px)] lg:w-[calc(50%-8px)] basis-auto shrink-0 antialiased p-0 lg:p-1'>
            <h2 className='text-[20px] lg:text-[42px] mb-2'> Security your way</h2>
            <p className='font-sans text-[14px] lg:text-[20px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased'>Choose security and privacy settings that work best for you and rest easy with automatic alerts for unusual or suspicious account activity.</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row w-auto h-auto box-border items-center mb-10'>
          <div className='w-[80%] lg:w-[50%]'>
            <img class="block opacity-100 w-full lg:h-[450px] object-cover rounded-lg mb-5 overflow-clip overflow-clip-margin aspect-video" src='https://assets.account.microsoft.com/signedout/compassassets/6139e484-7705-4f08-b625-dbf284fef7de.png?n=592x540_password.png'/>
          </div>
          <div className='font-sans text-[14px] font-normal h-auto w-[calc(80%-8px)] lg:w-[calc(50%-8px)] basis-auto shrink-0 antialiased p-0 lg:px-5'>
            <h2 className='text-[20px] lg:text-[42px] mb-2'> Break free from passwords</h2>
            <p className='font-sans text-[14px] lg:text-[20px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased'>Make your account even more secure with optional passwordless sign-in.</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row-reverse w-auto h-auto box-border items-center'>
          <div className='w-[80%] lg:w-[50%]'>
            <img class="block opacity-100 w-full h-full object-cover rounded-lg overflow-clip overflow-clip-margin mb-5 lg:h-[450px]" src='https://assets.account.microsoft.com/signedout/compassassets/e498939c-8a39-42e7-83da-3292d4249dcd.png?n=592x540_management_v2.png'/>
          </div>
          <div className='font-sans text-[14px] font-normal h-auto w-[calc(80%-8px)] lg:w-[calc(50%-8px)] basis-auto shrink-0 antialiased p-0'>
            <h2 className='text-[20px] lg:text-[42px] mb-2'>One place to manage it all</h2>
            <p className='font-sans text-[14px] lg:text-[20px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased'>Manage your account from a single dashboard, including payment information, purchases, subscriptions, and more.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
