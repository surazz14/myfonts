import React from 'react'
import Image from "next/image";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:text-left md:text-center xl:text-center mt-10 gap-1">
                <span className="sm:text-xl md:text-2xl xl:text-3xl font-semibold">MyFonts is the largest font marketplace in the world,</span>
                <span className="sm:text-xl md:text-2xl xl:text-3xl font-semibold">offering professional fonts for any project.</span>
                <span className="sm:text-md md:text-md xl:text-xl ">Over 270,000 available fonts, and counting.</span>
            </div>
            <div>
                <div className="flex bg-gray-100 gap-4 mt-20 p-6 overflow-x-hidden md:overflow-x-scroll xl:overflow-x-scroll no-scrollbar sm:w-[842px] md:w-full xl:w-full">
                    <div className="bg-green-200 p-4 rounded-md flex-shrink-0 mx-auto w-full sm:w-[20rem] md:w-[25rem] xl:w-[30rem]">
                        <img
                            src="/a.avif"
                            alt="Vercel Logo"
                            className="dark:invert "

                        />
                        <div className="flex  justify-between mt-4">
                            <span> font</span>
                            <span> font</span>
                        </div>
                        <div className="flex  justify-end">
                            <span>font starting at</span>
                        </div>
                    </div>
                    <div className="bg-green-200 p-4 rounded-md flex-shrink-0 mx-auto w-full sm:w-[20rem] md:w-[25rem] xl:w-[30rem]">
                        <img
                            src="/b.avif"
                            alt="Vercel Logo"
                            className="dark:invert"

                        />
                        <div className="flex  justify-between mt-4">
                            <span> font</span>
                            <span> font</span>
                        </div>
                        <div className="flex  justify-end">
                            <span>font starting at</span>
                        </div>
                    </div>
                    <div className="bg-green-200 p-4 rounded-md flex-shrink-0 mx-auto w-full sm:w-[20rem] md:w-[25rem] xl:w-[30rem]">
                        <img
                            src="/b.avif"
                            alt="Vercel Logo"
                            className="dark:invert"

                        />
                        <div className="flex  justify-between mt-4">
                            <span> font</span>
                            <span> font</span>
                        </div>
                        <div className="flex  justify-end">
                            <span>font starting at</span>
                        </div>
                    </div>
                    <div className="bg-green-200 p-4 rounded-md flex-shrink-0 mx-auto w-full sm:w-[20rem] md:w-[25rem] xl:w-[30rem]">
                        <img
                            src="/b.avif"
                            alt="Vercel Logo"
                            className="dark:invert"

                        />
                        <div className="flex  justify-between mt-4">
                            <span> font</span>
                            <span> font</span>
                        </div>
                        <div className="flex  justify-end">
                            <span>font starting at</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-[5rem] p-4 flex  flex-col gap-4 mb-[4rem]" >
                <span className="text-2xl bg-blue-500 w-[12rem] py-2 px-2 rounded-md text-white shadow-lg">Special offer</span>
                <div className=" md:flex xl:flex gap-4">
                    <div>
                        <img src="/c.avif" alt="" />
                        <span className="mt-4">Sherilyn Script Font Duo by Zane </span>
                    </div>
                    <div>
                        <img src="/d.avif" alt="" />
                        <span>Sherilyn Script Font Duo by Zane </span>
                    </div>
                    <div>
                        <img src="/e.avif" alt="" />
                        <span>Sherilyn Script Font Duo by Zane </span>
                    </div>
                    <div>
                        <img src="/c.avif" alt="" />
                        <span>Sherilyn Script Font Duo by Zane</span>
                    </div>
                    <div>
                        <img src="/d.avif" alt="" />
                        <span>Sherilyn Script Font Duo by Zane</span>
                    </div>

                </div>
            </div>
            <div className="bg-gray-100">
                <div className=" flex flex-col xl:flex-row md:flex-row md:flex xl:flex gap-[3rem] md:gap-[8rem] xl:gap-[8rem] p-4  mt-[5rem]">
                    <div className="flex flex-col gap-4">
                        <span className="font-semibold text-xl">Connect</span>
                        <form action="" className="border-2 border-black-50">
                            <input className=" w-[13.5rem] py-2" type="text" placeholder='Subscribe to our newsletter' />
                            <span className=" px-2 text-gray-600" >Subscribe</span>
                        </form>

                        <div className="flex flex-col gap-2 text-gray-600">
                            <span>Follow us on instagram</span>
                            <span>Follow us on twitter</span>
                            <span>Follow us on facebook page</span>

                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-600">
                        <span className="font-semibold text-xl text-black">We accept</span>
                        <span>visa</span>
                        <span>mastercard</span>
                        <span>payPal</span>

                    </div>
                    <div className="flex flex-col gap-2 mb-2 text-gray-600" >
                        <span className="font-semibold text-xl text-black">Sell</span>
                        <span>Become a Foundry partner</span>
                        <span>Become an Affiliate</span>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-600">
                        <span className="font-semibold text-xl mb-2 text-black">About</span>
                        <span>Terms and Conditions</span>
                        <span>Terms of Use</span>
                        <span>Privacy Policy</span>
                        <span>Return Policy</span>
                        <span>Legal</span>
                        <span>About</span>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-600">
                        <span className="font-semibold text-xl mb-2 text-black">Help</span>
                        <span>FAQ</span>
                        <span>Contact</span>
                    </div>

                </div>
                <span className="flex items-center justify-center text-gray-600 mt-[3rem] mb-[3rem] text-sm">Copyright © 1999-2024 MyFonts Inc. All rights reserved.</span>
            </div>
        </div >
    )
}

export default Home