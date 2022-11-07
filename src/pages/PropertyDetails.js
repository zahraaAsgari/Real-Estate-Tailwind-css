import React from 'react';
//import useParams 
import { useParams } from 'react-router-dom';

//import housesData
import {housesData} from '../data';

//import Icons
import {BiBath,BiBed,BiArea} from 'react-icons/bi';

//import Link from react-router-dom
import {Link} from 'react-router-dom';



const PropertyDetails = () => {
//get house id
const {id}=useParams();

  const property = housesData.find((house)=>{
return house.id === parseInt(id);
  });


  return (
    <div className="container mx-auto min-h-[800px]">
     <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between mt-[40px] items-start ">
      <div className="flex flex-col items-start">
        <div className="text-2xl font-semibold mb-2">{property.name}</div>
        <div className="mb-4 text-lg">{property.address}</div>
      </div>
      <div className="flex gap-x-2 mb-5 lg:mt-5">
        <div className="text-sm bg-green-600 hover:bg-green-500 px-3 text-white rounded-full">{property.type}</div>
        <div className="bg-violet-600 hover:bg-violet-500 px-3 text-white rounded-full">{property.country}</div>
      </div>
      <div className="text-3xl font-semibold text-violet-800">$ {property.price}</div>
     </div>
     <div className="flex flex-col md:flex-row lg:flex-row lg:gap-x-10">
      <div className="max-w-[768px] mt-3 ">
        <img className="rounded-md" src={property.imageLg} alt="imagelarge" />
        <div className="flex gap-x-5 my-5">
 <div className="flex gap-x-1 mt-1 items-center text-violet-700 font-semibold">
<div className="text-[25px]"><BiBed/></div>
<div>{property.bedrooms}</div>
    </div>
    <div className="flex gap-x-1 mt-1 items-center text-violet-700 font-semibold">
<div className="text-[25px]"><BiBath/></div>
<div>{property.bathrooms}</div>
    </div>
    <div className="flex gap-x-1 mt-1 items-center text-violet-700 font-semibold">
<div className="text-[25px]"><BiArea/></div>
<div>{property.surface}</div>
    </div>
 </div>
 <div>
  <p>{property.description}</p>
 </div>
      </div>
      <div className='flex-1 w-full mb-8 mt-3 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={property.agent.image} alt="agentImage"></img>
            </div>
            <div>
              <div className='font-bold text-lg'>{property.agent.name}</div>
              <Link to='' className='text-violet-700 text-sm'>
                View listings
              </Link>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Name*'
            />
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Email*'
            />
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Phone*'
            />
            <textarea
              className='border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
              type='text'
              placeholder='Message*'
              defaultValue='Hello, I am interested in [Modern apartment]'
            />
            <div className='flex gap-x-2'>
              <button
                className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
                type='submit'
              >
                Send message
              </button>
              <button className='border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition'>
                Call
              </button>
            </div>
          </form>
        </div>
     </div>
    </div>
  )
};

export default PropertyDetails;
