import React from 'react';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col bg-gray-50 p-6 rounded-lg w-full">
      <img src={image} alt={title} className=" aspect-video rounded-lg object-cover mb-4" />
      <h3 className="font-sans text-[24px] font-semibold text-[rgb(50,49,48)] inline leading-[1.4] antialiased mb-3">{title}</h3>
      <p className="font-sans text-[18px] font-normal text-[rgb(50,49,48)] inline leading-[1.4] antialiased">{description}</p>
    </div>
  );
};

export default FeatureCard;
