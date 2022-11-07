import React,{useContext,useState} from 'react';

//import headless ui
import { Menu } from '@headlessui/react';

//import HouseContext
import {HouseContext} from './HouseContext';
//import react icons
import {RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';



const CountryDropdown = () => {

  const {country,setCountry,countries}=useContext(HouseContext);

  //useState
  const [isOpen,setIsOpen]=useState(false);

  return <Menu as="div" className="dropdown relative">
  <Menu.Button className="dropdown-btn w-full text-left " onClick={()=>setIsOpen(!isOpen)}>
    <RiMapPinLine className="dropdown-icon-primary"/>
   
    <div >
      <div className="text-[15px] font-medium leading-tight ">{country}</div>
      <div className="text-[13px]">Select Your Place</div>
    </div>
    {isOpen ? (<RiArrowUpSLine className="dropdown-icon-secondary "/>) :(<RiArrowDownSLine className="dropdown-icon-secondary "/>)}

  </Menu.Button>

  <Menu.Items className="dropdown-menu ">
    {countries.map((country,index)=>{
      return (
        <Menu.Item as="li" className="cursor-pointer hover:text-violet-700" onClick={()=>setCountry(country)} key={index}>
          {country}
        </Menu.Item>
      )
    })}
  </Menu.Items>

  </Menu>;
};

export default CountryDropdown;
