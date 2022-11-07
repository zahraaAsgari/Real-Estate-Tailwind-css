import React,{useContext} from 'react';
//import components
import CountryDropdown from './CountryDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';

//import react icons
import {RiSearch2Line} from 'react-icons/ri'

//import HouseContext
import {HouseContext} from './HouseContext';

const Search = () => {
  const {handleClick}=useContext(HouseContext);

  return <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 lg:backdrop-blur-sm rounded-lg lg:bg-transparent bg-white">
<CountryDropdown/>
<PriceRangeDropdown/>
<PropertyDropdown/>
<button onClick={()=>handleClick()} className="bg-violet-800 hover:bg-violet-700 h-16 lg:max-w-[162px] w-full text-white flex justify-center items-center rounded-lg transition">
  <RiSearch2Line/>
</button>
  </div>;
};

export default Search;
