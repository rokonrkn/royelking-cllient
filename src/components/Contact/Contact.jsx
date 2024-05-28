import React, { useEffect, useRef, useState } from 'react';
import './Contact.css'
import logo from '../../../public/images/logo.png'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Contact = () => {

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
        <div className="">
            <div className="title-image h-[500px]">
                <nav className=" items-center xl:mx-16  flex justify-between px-4 py-4 text-white">
                    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold bg-white transition-all duration-200 hover:scale-110">
                        <img className='w-44' src={logo} alt="" />
                    </div>
                    <ul className="hidden items-center  gap-10 md:flex">
                        <Link to={`/`}><li className="group flex   flex-col">
                            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#c77a63] transition-all duration-300 group-hover:w-full"></span>
                        </li></Link>
                        <Link to={`/about`}><li className="group flex   flex-col">
                            About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#c77a63] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        </Link>
                        <Link to={`/rooms`}><li className="group flex   flex-col">
                            Rooms<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#c77a63] transition-all duration-300 group-hover:w-full"></span>
                        </li></Link>
                        <Link to={`/contact`}><li className="group flex   flex-col">
                            Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#c77a63] transition-all duration-300 group-hover:w-full"></span>
                        </li></Link>
                        <Link to={`/blog`}><li className="group flex   flex-col">
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
                                    <Link to={`/`}><li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                                        Home
                                    </li></Link>
                                    <Link to={`/about`}><li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        About
                                    </li></Link>
                                    <Link to={`/rooms`}><li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        Rooms
                                    </li></Link>
                                    <Link to={`/blog`}><li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        Blog
                                    </li></Link>
                                    <Link to={`/contact`}><li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        Contact
                                    </li></Link>

                                    <button style={{ border: '1px solid gray' }} className="group mt-10 ml-6 mb-8  relative z-10 h-12 w-36 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">BOOK YOUR STAY</span>BOOK YOUR STAY</button>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="flex items-center justify-center mt-44">
                    <h2 className='text-5xl text-white '> Contact Us
                    </h2>
                </div>
            </div>
            <div className="bg-[#e6c1b5] flex justify-center p-5 text-white">
                <Link className=' text-xl' to={`/`}>Home || </Link>
                <h2 className=' text-xl ml-2'>Contact Us</h2>
            </div>
            <div className='bg-[#eddad5] mt-20'>
                <div className="xl:mx-16 contact-container">
                    <div className="grid xl:grid-cols-2 ">
                        <div className="py-16">
                            <p className='text-[#f7a98e] uppercase font-bold tracking-widest'>Contact Us</p>
                            <h3 className='text-5xl mt-5'>If You Wish To <br />
                                Learn More Ask Before <br />
                                Booking.</h3>
                            <p className='mt-4 text-gray-500'>Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus
                                nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum
                                ornare sagittis dolor sagittis amet odio est.</p>
                        </div>
                        <div className="py-16 ">
                            <div className="bg-white py-16 rounded-xl px-10">
                                <div className="relative">
                                    <input className="peer border-b border-gray-500 focus:border-[#f8e21b] bg-transparent py-2 text-[#f7a98e] focus:outline-none w-96" type="text" id='navigate_ui_input_44' />
                                    <label className="absolute -top-2 left-0 bg-transparent text-md text-[#f7a98e] duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                        Your Name
                                    </label>
                                </div>
                                <div className="relative mt-8">
                                    <input className="peer border-b border-gray-500 focus:border-[#f8e21b] bg-transparent py-2 text-[#f7a98e] focus:outline-none w-96" type="text" id='navigate_ui_input_44' />
                                    <label className="absolute -top-2 left-0 bg-transparent text-md text-[#f7a98e] duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                        Your Email
                                    </label>
                                </div>
                                <div className="relative mt-8">
                                    <input className="peer border-b border-gray-500 focus:border-[#f8e21b] bg-transparent py-2 text-[#f7a98e] focus:outline-none w-96" type="text" id='navigate_ui_input_44' />
                                    <label className="absolute -top-2 left-0 bg-transparent text-md text-[#f7a98e] duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                        Subject
                                    </label>
                                </div>
                                <div className="relative mt-8">
                                    <input className="peer border-b border-gray-500 focus:border-[#f8e21b] bg-transparent py-2 text-[#f7a98e] focus:outline-none w-96" type="text" id='navigate_ui_input_44' />
                                    <label className="absolute -top-2 left-0 bg-transparent text-md text-[#f7a98e] duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                        Massage
                                    </label>
                                </div>
                                <div className="mt-10">
                                    <button style={{ border: '1px solid gray' }} className="group mt-7  bg-[#7a3a26]  relative z-10 h-12 w-36 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63] transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">SUBMIT</span>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;