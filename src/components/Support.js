import React from 'react';

const Support = () => {
  return (
    <section className="mt-16 ">
      <div className="container mx-auto flex flex-col justify-center items-center mb-10">
        <h2 className="font-sans text-[24px] lg:text-[64px] font-semibold text-[rgb(50,49,48)] inline leading-[1.4] antialiased mb-4">Simplify your day</h2>
        <p className="font-sans text-[14px] lg:text-[24px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased text-center mx-3 px-10 py-2">Access all your Microsoft apps, services, and games with one account.
        Whatever you’re doing, wherever you are, just go.</p>
      </div>

      <div className='flex flex-col justify-center items-center mx-12 lg:mx-28'>
        <div className='flex flex-col lg:flex-row w-auto h-auto box-border items-center mb-10'>
          <div className='w-[80%] lg:w-[50%]'>
            <img  class="block opacity-100 w-full h-full object-cover rounded-lg overflow-clip overflow-clip-margin mb-5 lg:h-[450px]" src='https://assets.account.microsoft.com/signedout/compassassets/28d21a82-c65f-4dcc-9acc-33dd16c1ca8e.png?n=592x540_signin.png'/>
          </div>
          
          <div className='font-sans text-[14px] font-normal h-auto w-[calc(80%-8px)] lg:w-[calc(50%-8px)] basis-auto shrink-0 antialiased p-0 lg:px-5'>
            <h2 className='text-[20px] lg:text-[42px] mb-2'> Sign in and go</h2>
            <p className='font-sans text-[14px] lg:text-[20px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased'>Your account profile and preferences sync across all your devices. Wherever you are, it’s all here.</p>
          </div>
        </div>

        
        <div className='flex flex-col lg:flex-row-reverse w-auto h-auto box-border items-center mb-10'>
          <div className='w-[80%] lg:w-[50%]'>
            <img  class="block opacity-100 w-full h-full object-cover rounded-lg overflow-clip overflow-clip-margin mb-5 lg:h-[450px]" src='https://assets.account.microsoft.com/signedout/compassassets/5de86244-0a3a-41e5-bb6b-5b5e62b732c7.png?n=592x540_pickup.png'/>
          </div>
          
          <div className='font-sans text-[14px] font-normal h-auto w-[calc(80%-8px)] lg:w-[calc(50%-8px)] basis-auto shrink-0 antialiased p-0 lg:p-1'>
            <h2 className='text-[20px] lg:text-[42px] mb-2'> Pick up where you left off</h2>
            <p className='font-sans text-[14px] lg:text-[20px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased'>Your data is automatically synced to the cloud, so contacts, calendar, and files are always backed up, no matter what device you’re on.</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row w-auto h-auto box-border items-center mb-10'>
          <div className='w-[80%] lg:w-[50%]'>
            <img  class="block opacity-100 w-full h-full object-cover rounded-lg overflow-clip overflow-clip-margin mb-5 lg:h-[450px]" src='https://assets.account.microsoft.com/signedout/compassassets/295f4081-bbc8-4f38-a5ce-1b2b586573c7.png?n=592x540_family.pngg'/>
          </div>
          
          <div className='font-sans text-[14px] font-normal h-auto w-[calc(80%-8px)] lg:w-[calc(50%-8px)] basis-auto shrink-0 antialiased p-0 lg:px-5'>
            <h2 className='text-[20px] lg:text-[42px] mb-2'> Keep it in the family</h2>
            <p className='font-sans text-[14px] lg:text-[20px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased'>Easily create a family group and set parental controls like screen time limits and app filters for free with Microsoft Family Safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
