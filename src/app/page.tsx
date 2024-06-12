// "use client"
// import { CiSearch, CiCamera } from "react-icons/ci";
// import { IoReorderThree } from "react-icons/io5";
// import { BsCart4 } from "react-icons/bs";
// import Sidebar from "./sidebar";
// import { FaCaretDown } from "react-icons/fa";
// import { useEffect, useRef, useState } from "react";
// export default function Home() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false)

//   const toggleSideBar = () => {
//     setIsSidebarOpen(!isSidebarOpen)
//   }
//   const toggleLanguageSideBar = () => {
//     setIsLanguageOpen(!isLanguageOpen);
//   };

//   return (
//     <div className="flex items-center gap-4 md:p-0 p-2 md:border-b border-black">
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar} />
//       < IoReorderThree className="md:hidden flex-none text-2xl cursor-pointer" onClick={toggleSideBar} />
//       <span className="text-blue-500 font-bold md:text-3xl text-1xl md:w-[10rem] w-[40rem] sm:flex-none md:ml-2">Practice</span>
//       <div className="flex justify-end w-full flex-col md:border-l border-black ">
//         <div className="md:flex w-full flex items-center  md:border-b border-black justify-end">
//           <form className=" md:flex items-center p-2  gap-1 md:border-r border-black">
//             <CiSearch className="text-2xl md:flex " />
//             <input type="text" placeholder="Search for fonts" className="md:flex sm:hidden hidden h-[3rem] outline-none w-[20rem]" />
//             <CiCamera className="text-3xl md:flex hidden " />
//           </form>
//           <ul className="md:flex items-center justify-end gap-3 w-full md:mr-[2rem]  hidden">
//             <li>learn</li>
//             <div className="flex items-center hover:bg-gray-100 py-2 px-3 cursor-pointer" onClick={toggleLanguageSideBar}>
//               <span>USD</span>
//               <FaCaretDown className="text-1xl mb-1" />
//               {isLanguageOpen && <ul className={`fixed top-[3.5rem] right-[15rem] bg-white shadow-md p-4 rounded-md flex flex-col gap-4 text-sm border border-black-100`}>
//                 <li>GBP</li>
//                 <li>NRP</li>
//                 <li>EUR</li>
//               </ul>}
//             </div>
//             <div className="flex items-center hover:bg-gray-100 py-2 px-3 cursor-pointer" onClick={toggleSideBar}>
//               <span>EN</span>
//               <FaCaretDown className="text-1xl mb-1" />
//               {isSidebarOpen && <ul className={`fixed top-[3.5rem] right-[10rem] bg-white shadow-md p-4 rounded-md flex flex-col gap-4 text-sm border border-black-100`}>
//                 <li>EN- English(UK)</li>
//                 <li>NP- Nepali</li>
//                 <li>IN- India</li>
//               </ul>}
//             </div>
//           </ul>
//           <div className="flex items-center justify-end ms:w-[10rem] gap-3">
//             <BsCart4 className="text-2xl" />
//             <span className=" flex justify-center bg-blue-500 p-2 rounded-md text-white md:font-bold font-semibold cursor-pointer md:w-[5rem] sm:w-[4rem] w-[4rem] md:mr-2">Log In</span>
//           </div>
//         </div>
//         <div className="hidden md:flex ml-[5rem] justify-between  items-center">
//           <ul className="hidden md:flex gap-5 md:text-base cursor-pointer">
//             <div className="flex items-center cursor-pointer hover:bg-gray-100 py-4 px-3">
//               <span>Browse By</span>
//               <FaCaretDown text-1xl />
//             </div>
//             <div className="py-4 px-3">
//               <span>Categories</span></div>
//             <li className="py-4 px-3">Bestsellers</li>
//             <li className="py-4 px-3">Hot New Fonts</li>
//             <li className="py-4 px-3">Premium Type Foundries</li>
//             <li className="py-4 px-3">WhatTheFont</li>
//           </ul>
//           <span className="bg-black text-white py-4 px-5">Subscription plans</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import Header from './header'
import First from './Home'

const Home = () => {
  return (
    <div>
      <Header />
      <First />
    </div>
  )
}

export default Home


