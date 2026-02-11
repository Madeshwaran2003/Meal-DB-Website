import React from 'react'
import interfaceimage from "../assets/interfacephoto.png"
import background from "../assets/background.png"
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import '../App.css';
import {Link} from "react-router-dom";

const Header = () => {
  const[open,setOpen]=useState(false);

  const closeMenu=()=>setOpen(false);
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-[#fae8b4] shadow relative">
        <div >
          <Link href="#" className="flex"><IoFastFoodOutline />FooDMaD</Link>
        </div>
        <div className="hidden   md:flex gap-6 font-semibold text-gray-700 ">
          <a href="#" className="hover:text-orange-500 px-3">HOME</a>
          <a href="#" className="hover:text-orange-500 px-3">ABOUT</a>
          <a href="#" className="hover:text-orange-500 px-3">SERVICE</a>
          <a href="#" className="hover:text-orange-500 px-3">MENU</a>
          <a href="#" className="hover:text-orange-500 px-3">CONTACT</a>
        </div>
        <div className="md:hidden text-3xl cursor-pointer" onClick={()=>setOpen(!open)}><GiHamburgerMenu /></div>
          {open && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg w-40 py-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 font-semibold text-gray-700 px-6">
            <li><a href="#" onClick={closeMenu} className="hover:text-red-500 border-b-amber-500">HOME</a></li>
            <li><a href="#" onClick={closeMenu} className="hover:text-red-500 border-b-amber-500">ABOUT</a></li>
            <li><a href="#" onClick={closeMenu} className="hover:text-red-500 border-b-amber-500">SERVICE</a></li>
            <li><a href="#" onClick={closeMenu} className="hover:text-red-500 border-b-amber-500">MENU</a></li>
            <li><a href="#" onClick={closeMenu} className="hover:text-red-500 border-b-amber-500">CONTACT</a></li>
          </ul>
        </div>
        )}
      </nav>
      
   <div
  className="relative  md:min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${background})` }}
>
  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-[#c05800]/40 backdrop-blur-sm"></div>

  {/* CONTENT SECTION */}
  <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16">

    {/* LEFT → TEXT (desktop)  
        BOTTOM → MOBILE */}
    <div className="md:w-1/2 text-center md:text-left space-y-6  md:mt-0">
      <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
        Hot & Fresh Pizza Delivered Fast
      </h1>
      
      <p className="text-gray-200 text-lg">
        The best pizza made with fresh ingredients, served hot and delicious.
      </p>
         <p className="text-gray-200 text-lg">
        We deliver a freshly food from out shop to your house.
      </p>
      <div className="flex justify-center mb-4">
      <Link to="/"><button className="px-8 py-3 mx-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
        Categories
      </button></Link>
      <Link to="/"><button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
        Favorites
      </button></Link>
      </div>

      
    </div>

    {/* RIGHT → IMAGE (desktop)  
        TOP → MOBILE */}
    <div className="md:w-1/2 flex justify-center  md:mb-0">
      <img
        src={interfaceimage}
        alt="pizza"
        className="w-120 md:w-[600px] rotate-slow"
      />
    </div>

  </div>

</div>
  <div className="flex flex-col items-center bg-[#f2cf7e]  border-b border-[#c05800]">
    <h1 className="text-4xl text-[#c05800] font-bold border-b-2">MEAL CATEGORY</h1>
    <form className="m-6">
      <input type="text" placeholder="Search food..." className="bg-[#f2cf73] w-[300px] h-[45px] rounded-4xl text-white text-2xl px-4 font-bold border-2"  />
      <button className="bg-[#ff7900] py-2 px-6 mx-4 rounded-4xl font-bold text-black hover:bg-[#a6e93a]">Search</button>
    </form>
  </div>

</>
      
    
  )
}

export default Header