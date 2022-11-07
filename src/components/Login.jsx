import React from 'react'
//import icons
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

//import Link from react-router-dom
import {Link} from 'react-router-dom';

//import images
import Logo from '../assets/img/logo.svg';
import loginImg from '../assets/img/houses/house11lg.png';

export default function Login() {
 
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'><img className="text-center" src={Logo} alt="logo" /></h2>
            <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"/>Remember Me</p>
            <div className="flex gap-x-3 items-center">
            <p className='text-center mt-8'>Not a member? </p>
            <Link className="text-violet-700 hover:text-violet-600 mt-7" to="/SignUp">Sign up now</Link>
           
            </div>
        </form>
    </div>
    </div>
  )
}