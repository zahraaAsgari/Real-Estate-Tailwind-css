import React,{useState,useEffect,createContext} from 'react';

//import HousesData 
import {housesData} from '../data';
import CountryDropdown from './CountryDropdown';

//CreatContext
 export const HouseContext=createContext()

const HouseContextProvider = ({children}) => {
  //useState
  const [houses,setHouses]=useState(housesData);
  const [country,setCountry]=useState('Location (any)');
  const [countries,setCountries]=useState([]);
  const [property,setProperty]=useState('Property type (any)');
  const [properties,setProperties]=useState([]);
  const [price,setPrice]=useState('Price range (any)');
  const [loading,setLoading]=useState(false);


// return countries useEffect
useEffect(() => {
 const allCountries=houses.map((house)=>{
  return house.country;
 });

 //remove repetitive countries
 const uniqCountries=['Location (any)', ...new Set(allCountries)];

 //set countries
 setCountries(uniqCountries);

}, []);

//return properties useEffect
useEffect(() => {
 const allProperties = houses.map((house)=>{
  return house.type;
 });

 //remove repetitive properties
 const uniqProperties=['Property type (any)', ...new Set(allProperties)];

 //set properties
 setProperties(uniqProperties);

}, []);

// serch function
const handleClick=()=>{
  //set setLoading
  setLoading(true);

//check the default value
  const isDefault=(str)=>{
   return str.split(' ').includes('(any)');
  };
      // get first string (price) and parse it to number
      const minPrice = parseInt(price.split(' ')[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);
  
//get filtered houses
    const newHouses=housesData.filter((house)=>{
      
    const housePrice=parseInt(house.price);

    //if all features are selected
    if(
      house.country === country &&
       house.type === property &&
       housePrice >= minPrice && 
      housePrice <= maxPrice){
      return house;
    }
    //if all features are default
    if(
      isDefault(country)&&
      isDefault(property)&&
      isDefault(price) ){
        return house;
           }

           //if country is not default
           if(
      !isDefault(country)&&
      isDefault(property)&&
      isDefault(price)
           ){
            return house.country === country;
           }
           //if property is not default

 if(
      isDefault(country)&&
      !isDefault(property)&&
      isDefault(price)
           ){
            return house.type === property;
           }
           //if price is not default

           if(
      isDefault(country)&&
      isDefault(property)&&
      !isDefault(price)
           ){
            if(  housePrice >= minPrice && 
      housePrice <= maxPrice){
        return house;
      }};
      //if country and property are not default
      if(
        !isDefault(country)&&
      !isDefault(property)&&
      isDefault(price)
      ){
        return house.type === property && house.country ===country;
      }
      //if country and price are not default
      if(
        !isDefault(country)&&
      isDefault(property)&&
      !isDefault(price)
      ){
        if(housePrice >= minPrice && 
      housePrice <= maxPrice){
        return house.country ===country;
      }
      }
      //if price and property are not default
      if(
      isDefault(country)&&
      !isDefault(property)&&
      !isDefault(price)
      ){
        if(housePrice >= minPrice && 
      housePrice <= maxPrice){
        return house.type ===property;
      }};
    });
    

setTimeout(()=>{
return(
  newHouses.length <1 ? setHouses([]) : setHouses(newHouses),

setLoading(false)
);

},1000)
 


}




  return (
  <HouseContext.Provider value={{
houses,
setProperty,
setPrice,
country,
setCountry,
countries,
setCountries,
property,
properties,
price,
loading,
handleClick
  }}>{children}</HouseContext.Provider>
  )
};

export default HouseContextProvider;
