import React from 'react';
import FeatureCard from './FeatureCard';
import MicrosoftAppsImage from '../assets/microsoft-apps.png'; // Replace with your images
import CloudStorageImage from '../assets/cloud-storage.png';
import Xbox from '../assets/xbox.png';
import Reward from '../assets/reward.png';

const FeaturesSection = () => {
  return (
    <div className='mx-12'>
        <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="font-sans text-[24px] lg:text-[64px] font-semibold text-[rgb(50,49,48)] inline leading-[1.4] antialiased">The best of Microsoft</h2>
        <p className="font-sans text-[14px] lg:text-[24px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased text-center px-8 py-2">You get more for free when you sign in with your Microsoft account.</p>
      </div>
    <div className="flex flex-col lg:flex-row lg:mx-60 w-auto h-auto box-border justify-center m-5 lg:m-20">
      <FeatureCard
        image={MicrosoftAppsImage}
        title="Microsoft 365 apps"
        description="Get access to free online versions of Outlook, Word, Excel, and PowerPoint."
      />
      <FeatureCard
        image={CloudStorageImage}
        title="5 GB of cloud storage"
        description="Save your files and photos and access them from any device, anywhere."
      />
      </div>
<div className="flex flex-col lg:mx-60 lg:flex-row w-auto h-auto box-border justify-center m-5 lg:m-20">
    <FeatureCard
        image={Xbox}
        title="5 GB of cloud storage"
        description="Save your files and photos and access them from any device, anywhere."
      />

    <FeatureCard
        image={Reward}
        title="5 GB of cloud storage"
        description="Save your files and photos and access them from any device, anywhere."
      />
    </div>
    </div>
  );
};

export default FeaturesSection;
