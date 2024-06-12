"use client"
import { CiSearch, CiCamera } from "react-icons/ci";
import { IoReorderThree } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import Sidebar from "./sidebar";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)

    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    const toggleLanguageSideBar = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    return (
        <div className="flex items-center gap-4 md:p-0 p-2 md:border-0 xl:border-b border-black">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar} />
            < IoReorderThree className="md:flex xl:hidden  flex-none text-2xl cursor-pointer" onClick={toggleSideBar} />
            <span className="text-blue-500 font-bold sm:text-xl xl:text-4xl md:text-3xl md:w-[10rem] w-[40rem] sm:flex-none xl:ml-2">Example</span>
            <div className="flex justify-end w-full flex-col md:border-0 xl:border-l border-black ">
                <div className="lx:flex w-full flex items-center  xl:border-b border-black justify-end">
                    <form className=" xl:flex items-center p-2  gap-1 xl:border-r border-black">
                        <CiSearch className="text-2xl md:flex xl:flex" />
                        <input type="text" placeholder="Search for fonts" className="md:hidden xl:flex sm:hidden hidden h-[3rem] outline-none w-[20rem]" />
                        <CiCamera className="text-3xl md:hidden xl:flex hidden " />
                    </form>
                    <ul className="md:hidden xl:flex  items-center justify-end gap-3 w-full md:mr-[2rem]  hidden">
                        <li>learn</li>
                        <div className="flex items-center hover:bg-gray-100 py-2 px-3 cursor-pointer" onClick={toggleLanguageSideBar}>
                            <span>USD</span>
                            <FaCaretDown className="text-1xl mb-1" />
                            {isLanguageOpen && <ul className={`fixed top-[3.5rem] right-[15rem] bg-white shadow-md p-4 rounded-md flex flex-col gap-4 text-sm border border-black-100`}>
                                <li>GBP</li>
                                <li>NRP</li>
                                <li>EUR</li>
                            </ul>}
                        </div>
                        <div className="flex items-center hover:bg-gray-100 py-2 px-3 cursor-pointer" onClick={toggleSideBar}>
                            <span>EN</span>
                            <FaCaretDown className="text-1xl mb-1" />
                            {isSidebarOpen && <ul className={`fixed top-[3.5rem] right-[10rem] bg-white shadow-md p-4 rounded-md flex flex-col gap-4 text-sm border border-black-100`}>
                                <li>EN- English(UK)</li>
                                <li>NP- Nepali</li>
                                <li>IN- India</li>
                            </ul>}
                        </div>
                    </ul>
                    <div className="flex items-center justify-end ms:w-[10rem] gap-3">
                        <BsCart4 className="text-2xl" />
                        <span className=" flex justify-center bg-blue-500 p-2 rounded-md text-white md:font-bold font-semibold cursor-pointer md:w-[5rem] sm:w-[4rem] w-[4rem] md:mr-2">Log In</span>
                    </div>
                </div>
                <div className="hidden md:hidden xl:flex  ml-[5rem] justify-between  items-center">
                    <ul className="hidden md:flex md:gap-1 xl:gap-5 md:text-sm xl:text-base cursor-pointer">
                        <div className="flex items-center cursor-pointer hover:bg-gray-100 py-4 px-3">
                            <span className="sm:text-sm md:text-sm lg:text-md">Browse By</span>
                            <FaCaretDown text-1xl />
                        </div>
                        <div className="py-4 px-3">
                            <span className="custom-li sm:text-sm md:text-sm lg:text-md xl:text-base">Categories</span></div>
                        <li className="custom-li sm:text-sm md:text-sm lg:text-md xl:text-base">Bestsellers</li>
                        <li className="custom-li sm:text-sm md:text-sm lg:text-md xl:text-base">Hot New Fonts</li>
                        <li className="custom-li sm:text-sm md:text-sm lg:text-md xl:text-base">Premium Type Foundries</li>
                        <li className="custom-li sm:text-sm md:text-sm lg:text-md xl:text-base">WhatTheFont</li>
                    </ul>
                    <span className="bg-black text-white py-4 px-5 md:text-sm xl:text-base">Subscription plans</span>
                </div>
            </div>
        </div>
    );
}


