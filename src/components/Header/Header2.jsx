import React, { useEffect, useRef, useState } from 'react';
import logo from '../../../public/logo.png'
import { Link } from 'react-router-dom';
// import titileImage from '../../../public/images/page-title.jpg'
import './Header2.css'

const Header2 = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <div className='title-image h-[500px]'>
            <div className="xl:mx-16 ">
                <nav className=" items-center  flex justify-between px-4 py-4 text-white">
                    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold bg-white transition-all duration-200 hover:scale-110">
                        <img className='w-44' src={logo} alt="" />
                    </div>
                    <ul className="hidden items-center  gap-10 md:flex">
                        <Link to={`/`}><li className="group flex   flex-col">
                            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#c77a63] transition-all duration-300 group-hover:w-full"></span>
                        </li></Link>
                        <Link><li className="group flex   flex-col">
                            About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#c77a63] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        </Link>
                        <Link><li className="group flex   flex-col">
                            Rooms<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#c77a63] transition-all duration-300 group-hover:w-full"></span>
                        </li></Link>
                        <Link><li className="group flex   flex-col">
                            Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#c77a63] transition-all duration-300 group-hover:w-full"></span>
                        </li></Link>
                        <Link><li className="group flex   flex-col">
                            Blog<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#c77a63] transition-all duration-300 group-hover:w-full"></span>
                        </li></Link>
                    </ul>
                    <div className="xl:inline-block sm:hidden ">
                        <button style={{ border: '1px solid white' }} className="group  relative z-10 h-12 w-36 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">BOOK YOUR STAY</span>BOOK YOUR STAY</button>
                    </div>
                    <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                        {dropDownState && (
                            <div className="">
                                <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                                    <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                                        Home
                                    </li>
                                    <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        About
                                    </li>
                                    <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        Rooms
                                    </li>
                                    <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        Blog
                                    </li>
                                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">

                                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                            About
                                        </li>
                                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                            Rooms
                                        </li>
                                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                            Blog
                                        </li>
                                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                            Contact
                                        </li>
                                    </ul>

                                    <button style={{ border: '1px solid gray' }} className="group mt-10 ml-6 mb-8  relative z-10 h-12 w-36 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">BOOK YOUR STAY</span>BOOK YOUR STAY</button>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="flex items-center justify-center mt-44">
                    <h2 className='text-5xl text-white '>404 Page</h2>
                </div>
            </div>
        </div>
    );
};

export default Header2;