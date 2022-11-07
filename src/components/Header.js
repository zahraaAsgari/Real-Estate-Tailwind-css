import React from 'react';

//import link
import {Link} from 'react-router-dom';

//import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return <header className="py-6 mb12 border-b">
<div className="container mx-auto flex items-center justify-between">

  {/* logo */}
  <Link to="/">
    <img src={Logo} alt="logo" className="hover:text-violet-900 transition" />
  </Link>
  <div className="flex items-center gap-6">
  <Link to="/login">Login</Link>
    <Link to="/SignUp"  className="bg-violet-700 text-white px-4 py-3 rounded-lg hover:bg-violet-800 transition">Sign up</Link>
   
  </div>
</div>
  </header>;
};

export default Header;
