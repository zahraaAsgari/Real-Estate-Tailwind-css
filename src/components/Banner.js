import React from 'react';

//import image
import HouseBanner from '../assets/img/house-banner.png';

//import components
import Search from './Search';

const Banner = () => {
  return <section className="h-full mt-4 max-h-[675px] mb-8 xl:mb-24">
<div className="flex flex-col lg:flex-row mx-auto ">
  <div className="flex flex-col ml-8 lg:ml-[135px] text-center items-center lg:items-start lg:text-left justify-center flex-1px-4 lg:px-0">
    <h1 className="text-4xl lg:text-[48px] lg:max-w-[500px] font-semibold mb-6 leading-none"><span className="text-violet-700">Rent</span>{" "}Your Dream House With Us</h1>
    <p className="max-w-[480px] mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, omnis laborum! Vitae, animi facilis! Blanditiis cumque vero sint voluptate iure.</p>
  </div>
  {/* Banner Image */}
  <div className="hidden flex-1 lg:flex justify-end items-end lg:ml-8 ">
    <img src={HouseBanner} alt="banner" />
  </div>
</div>
<Search/>
  </section>;
};

export default Banner;
