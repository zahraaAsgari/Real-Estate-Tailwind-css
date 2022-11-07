import React from 'react';

//import from react-router-dom
import {Routes,Route} from 'react-router-dom';

//import components
import {Header,Footer,Login,SignUp} from './components';

//import pages
import {Home ,PropertyDetails} from './pages';



const App = () => {
  return <div className="max-w-[1440px] mx-auto bg-white">
  <Header/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/property/:id" element={<PropertyDetails/>}/>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/signup" element={<SignUp/>}></Route>
</Routes>
<Footer/>
  </div>;
};

export default App;
