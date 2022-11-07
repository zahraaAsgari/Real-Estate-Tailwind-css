import React from 'react';
//import icons
import {BiBath,BiBed,BiArea} from 'react-icons/bi';

const House = ({house}) => {

const {image,
type,
country,
address,
bedrooms,
bathrooms,
surface,
price}=house;

  return (
  <div className="bg-white shadow-1 px-2 mx-auto max-w-[345px] rounded-lg hover:shadow-2xl mb-2 rounded-tl-[90px] p-4 w-full cursor-pointer transition">
    <img src={image} alt="house" />
    <div className="flex gap-x-3 mt-2">
      <div className="text-sm bg-green-600 hover:bg-green-500 px-3 text-white rounded-full">{type}</div>
      <div className="bg-violet-600 hover:bg-violet-500 px-3 text-white rounded-full">{country}</div>
    </div>
    <div className="mt-2 font-semibold max-w-[230px] leading-tight">
      {address}
    </div>
 <div className="flex gap-x-3 my-2">
 <div className="flex gap-x-1 mt-1 items-center text-gray-500">
<div className="text-[20px]"><BiBed/></div>
<div>{bedrooms}</div>
    </div>
    <div className="flex gap-x-1 mt-1 items-center text-gray-500">
<div className="text-[20px]"><BiBath/></div>
<div>{bathrooms}</div>
    </div>
    <div className="flex gap-x-1 mt-1 items-center text-gray-500">
<div className="text-[17px]"><BiArea/></div>
<div>{surface}</div>
    </div>
 </div>
    <div className="mt-1 text-violet-600 font-semibold">{price}</div>
  </div>
  );
};

export default House;
