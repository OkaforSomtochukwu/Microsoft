import React from 'react';

const Pricing = () => {
  return (
    <section className="h-1/2">
      <div className="container mx-auto flex flex-col justify-center items-center mb-10">
      <h2 className="font-sans text-[24px] lg:text-[64px] font-semibold text-[rgb(50,49,48)] inline leading-[1.4] antialiased mb-4">Questions? We have answers</h2>
      </div>

      <div className='flex flex-col lg:flex-row w-auto h-auto box-border px-24 lg:m-28 gap-4'>
        
        <a href="#" class="flex flex-col w-auto my-5 h-auto box-border p-8 bg-white shadow-[rgba(0,0,0,0.133)_0px_1.6px_3.6px_0px,rgba(0,0,0,0.11)_0px_0.3px_0.9px_0px] rounded-lg gap-4">
          <h5 class="font-sans text-[30px] font-semibold text-[rgb(50,49,48)] inline leading-[1.4] antialiased">A Microsoft account does not need a Microsoft email</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-[20px]">The email address used to sign into your Microsoft account can be from Outlook.com, Hotmail.com, Gmail, Yahoo, or other providers.</p>
          <a className='text-blue-600 hover:underline text-[20px]'>Create a Microsoft Account</a>
        </a>

        <a href="#" class="flex flex-col w-auto my-5 h-auto box-border p-8 bg-white shadow-[rgba(0,0,0,0.133)_0px_1.6px_3.6px_0px,rgba(0,0,0,0.11)_0px_0.3px_0.9px_0px] rounded-lg gap-4">
          <h5 class="font-sans text-[30px] font-semibold text-[rgb(50,49,48)] inline leading-[1.4] antialiased">You may already have an account</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-[20px]">You can use an email address, Skype ID, or phone number to sign into your Windows PC, Xbox, or Microsoft services like Microsoft 365.</p>
          <a className='text-blue-600 hover:underline text-[20px]'>Check if I have a Microsoft account</a>
        </a>

        <a href="#" class="flex flex-col w-auto my-5 h-auto box-border p-8 bg-white shadow-[rgba(0,0,0,0.133)_0px_1.6px_3.6px_0px,rgba(0,0,0,0.11)_0px_0.3px_0.9px_0px] rounded-lg gap-4">
          <h5 class="font-sans text-[30px] font-semibold text-[rgb(50,49,48)] inline leading-[1.4] antialiased">Get help with your account</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-[20px]">Forgot your username or password? Visit Microsoft Support for account help and guidance.</p>
          <a className='text-blue-600 hover:underline text-[20px]'>Get help</a>
        </a>

      </div>
    </section>
  );
};

export default Pricing;
