
import React,{useContext,useState} from 'react';

//import headless ui
import { Menu } from '@headlessui/react';

//import HouseContext
import {HouseContext} from './HouseContext';
//import react icons
import {RiWallet3Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';



const PriceRangeDropdown = () => {

  const {price,setPrice}=useContext(HouseContext);

  //useState
  const [isOpen,setIsOpen]=useState(false);

   // set price Ranges

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '20000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
  ];
  return <Menu as="div" className="dropdown relative">
  <Menu.Button className="dropdown-btn w-full text-left " onClick={()=>setIsOpen(!isOpen)}>
    <RiWallet3Line className="dropdown-icon-primary"/>
   
    <div>
      <div className="text-[15px] font-medium leading-tight ">{price}</div>
      <div className="text-[13px]">Select Price Range</div>
    </div>
    {isOpen ? (<RiArrowUpSLine className="dropdown-icon-secondary "/>) :(<RiArrowDownSLine className="dropdown-icon-secondary "/>)}

  </Menu.Button>

  <Menu.Items className="dropdown-menu ">
    {prices.map((price,index)=>{
      return (
        <Menu.Item as="li" className="cursor-pointer hover:text-violet-700" onClick={()=>setPrice(price.value)} key={index}>
          {price.value}
        </Menu.Item>
      )
    })}
  </Menu.Items>

  </Menu>;
};

export default PriceRangeDropdown;


