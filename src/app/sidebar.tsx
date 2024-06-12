// "use Client"
// import React from 'react'
// import { RxCross1 } from "react-icons/rx";
// interface SidebarProps {
//     isOpen: boolean;

// }
// const sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
//     return (
//         <div className={`md:hidden fixed top-0 left-0 bg-slate-400 w-5/6 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}transition-transform duration-300 ease-in-out`}>
//             <div className="flex gap-2 items-center p-4 justify-between">
//                 <RxCross1 className="font-2xl" />
//                 <ul className="flex">
//                     <li>Learn</li>
//                     <li>Learn</li>
//                     <li>Learn</li>
//                 </ul>
//             </div>
//             <div className="flex flex-col gap-4 mt-4 p-4">
//                 <span>Subscription plan</span>
//                 <ul className="flex flex-col gap-4">
//                     <li>Browse By</li>
//                     <li>Categories</li>
//                     <li>Bestsellers </li>
//                     <li>Hot New Fonts</li>
//                     <li>Premium Type Foundries</li>
//                     <li>WhatTheFont</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

"use client"
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { CiSearch, CiCamera } from "react-icons/ci";
import { IoReorderThree } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`xl:hidden fixed top-0 left-0 bg-slate-400 w-5/6 h-full transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out lx:relative lx:translate-x-0`}>
            <div className="flex gap-2 items-center p-4 justify-between">
                <RxCross1 className="text-2xl cursor-pointer" onClick={toggleSidebar} />
                <ul className="flex">
                    <li>Learn</li>
                    <li>Learn</li>
                    <li>Learn</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 mt-4 p-4">
                <span>Subscription plan</span>
                <ul className="flex flex-col gap-4">
                    <li>Browse By</li>
                    <li>Categories</li>
                    <li>Bestsellers</li>
                    <li>Hot New Fonts</li>
                    <li>Premium Type Foundries</li>
                    <li>WhatTheFont</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar