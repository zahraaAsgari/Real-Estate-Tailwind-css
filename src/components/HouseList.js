import React, { useContext } from 'react';

  //import HouseContext
  import {HouseContext} from './HouseContext';

  //import Icons
  import {ImSpinner2} from 'react-icons/im';

  //import const
  import House from './House';

  //import Link from react-router-dom
  import {Link} from 'react-router-dom';

const HouseList = () => {
  
  //useContext
  const { houses,loading}=useContext(HouseContext);

  //if loading is true
  if(loading){
    return (<ImSpinner2 className="mx-auto animate-spin mt-[220px] text-violet-600"/>);
  }

  //if length of houses was less than one
  if(houses.length <1){
    return (<div className="mx-auto text-center mt-[220px] text-violet-600">Sorry ,There Is Nothing To See</div>)
  }


  return( 
  <section className="mb-20">
<div className="container mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {houses.map((house,index)=>{
    return(
      <Link to={`/property/${house.id}`} key={index}>
        <House house={house}/>
      </Link>
    )
  })}
</div>
</div>
  </section>
  );
};

export default HouseList;
