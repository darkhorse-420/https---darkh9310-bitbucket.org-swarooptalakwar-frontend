import { useState } from 'react'

import './App.css'
import 'daisyui';

// import createStockTable from "./asset.jsx"  
// Assuming Assets is the component for assets.jsx



function Header() {
  const [count, setCount] = useState(0)
 
  

  return (
    <>
  
     <div className="hero bg-base-200 min-h-full bg-gradient-to-r from-blue-400 to-emerald-500">
     <div className="navbar bg-emerald-500 bg-opacity-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 bg-gradient-to-r from-purple-300 to-blue-300 rounded-box z-[1] mt-3 w-52 p-2 shadow hover:scale-200">
        <li><a class="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white">Dashboard</a></li>
      
        <li>
          <a class="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white">Assets</a>
      
        </li>
        <li><a class="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white">Order-Booking</a></li>
        <li><a class="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white">Trade/Cashflow Book</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li><a class="max-w-xs transition duration-300 ease-in-out hover:scale-110 border border-emerald-200  mx-4  border-opacity-30 hover:text-white font-bold">Dashboard</a></li>
      <li>

          <a class="max-w-xs transition duration-300 ease-in-out hover:scale-110 border border-emerald-200  border-opacity-30 mx-4 hover:text-white hover:border-white-500 font-bold">Assets</a>
  

           
   
      </li>
      <li><a class="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white hover:border-white-500 border border-emerald-200  border-opacity-30 mx-4 font-bold">Order-Booking</a></li>
      <li><a class="max-w-xs transition duration-300 ease-in-out hover:scale-110 border border-emerald-200 border-opacity-30 mx-4 hover:text-white font-bold">Trade/Cashflow Book</a></li>
    </ul>
  </div>
  <div className="avatar online">
  <div className="w-10 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
</div>
</div>


    
    </>
  )
}

export default Header

