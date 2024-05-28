import React, { useEffect, useRef, useState } from 'react';
import './Blog.css'
import logo from '../../../public/images/logo.png'
import img from '../../../public/images/blog-2.jpg'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import img2 from '../../../public/images/testimonial-1.jpg'
import img3 from '../../../public/images/testimonial-3.jpg'
import Footer from '../Footer/Footer';

const Blog = () => {

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
        <div>
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
                        <h2 className='text-5xl text-white '> Blog Details
                        </h2>
                    </div>
                </div>
            </div>
            <div className="bg-[#e6c1b5] flex justify-center p-5 text-white">
                <Link className=' text-xl' to={`/`}>Home || </Link>
                <h2 className=' text-xl ml-2'>Blog Details</h2>
            </div>
            <div className="xl:mx-16 mt-20">
                <div className="blog-container">
                    <div className="p-10">
                        <img className='w-[100%] h-[450px]' src={img} alt="" />
                        <div className="content mt-10">
                            <p className='bg-red-100 py-1 px-4 w-28 uppercase text-red-800 '>15 April</p>
                            <h3 className='text-6xl contect-font mt-2'>Our New Miami Beach <br />
                                Hotel Is Open!</h3>
                            <p className='mt-2 text-gray-500'>Admin - 0 Comment</p>
                            <p className='text-gray-500 mt-6'>Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam sagittis nunc neque sit nec lorem tincidunt arcu nunc accumsan risus felis in ornare Lorem ipsum dolor sit amet, consectetur adipiscing elit. cursus ornare non non massa elit rutrum. eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec. Orc velit posuere turpis amet. Lectus lacus lectus habitasse amet quam libero, lorem. Volutpat maecenas viverra consequat condimentum diam donec aliquet. Natoque quam vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum. Aliquam gravida et proin maecenas quis faucibus varius tristique.</p>
                            <p className='text-gray-500 mt-4'>Pulvinar dolor aliquet netus ultrices neque, mi non accumsan ullamcorper nunc scelerisque turpis facilisis pretium ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu quis. Nunc euismod odio cursus in diam eget tincidunt mauris.</p>
                        </div>
                        <div className="mt-10 bg-[#e6c1b5] py-10 px-5">
                            <p className='text-2xl font-bold text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui consequat nibh elit urna interdum.</p>
                            <span className='flex mt-5 text-2xl'><hr className='w-20 mt-5 mr-5' /> Darlene Robertson</span>
                        </div>
                        <p className='py-10 text-gray-500'>Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec. Orc velit posuere turpis amet Lectus lacus lectus habitasse amet quam libero lorem Volutpat maecenas viverra consequat proin condimentum diam donec aliquet natoque quam vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum.</p>

                        <div className="">
                            <div className="">
                                <h3 className='text-2xl'>Two Comments</h3>
                            </div>
                            <div className="flex mt-10">
                                <img className='rounded-full' src={img2} alt="" />
                                <div className="ml-2">
                                    <div className="flex justify-between">
                                        <h3 className='text-2xl'>Mike Hardson</h3>
                                        <Link className='bg-[#e8a892] uppercase py-2 px-4 rounded-full text-white font-bold'>reply</Link>
                                    </div>
                                    <p className='mt-2 text-gray-500'>Lorem ipsum is simply free text used by copytyping eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                            </div>
                            <div className="flex mt-10">
                                <img className='rounded-full' src={img3} alt="" />
                                <div className="ml-2">
                                    <div className="flex justify-between">
                                        <h3 className='text-2xl'>Mike Hardson</h3>
                                        <Link className='bg-[#e8a892] uppercase py-2 px-4 rounded-full text-white font-bold'>reply</Link>
                                    </div>
                                    <p className='mt-2 text-gray-500'>Lorem ipsum is simply free text used by copytyping eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="bg-[#e3beb3] p-10 rounded-lg">
                            <h3 className='text-2xl'>Search</h3>
                            <span><input type="search" name="" id="" className='outline-none pl-3 py-2 absolute' placeholder='Search..' /> </span>
                            <Link className=''><CiSearch className='relative py-2 text-4xl ml-[150px] mt-5 ' /> </Link>
                        </div>
                        <div className="bg-[#efdbd4] mt-16 py-8 px-5">
                            <h3 className='text-2xl'>Categories</h3>
                            <h4 className='mt-5 text-xl font-mono border-b'  >City Guide</h4>
                            <h4 className='mt-3 text-xl font-mono  border-b '>Digital Nomad</h4>
                            <h4 className='mt-3 text-xl font-mono  border-b '>Spa & Wellness</h4>
                            <h4 className='mt-3 text-xl font-mono  border-b '>News & Offers</h4>
                            <h4 className='mt-3 text-xl font-mono  border-b '>Tips & Tricks</h4>
                        </div>
                        <div className="bg-[#eddad4] mt-16 py-8 px-5">
                            <h3 className='text-2xl'>Popular Tag</h3>
                            <div className="mt-8 ">
                                <Link className='py-2 px-5 bg-white rounded-full hover:bg-[#e3beb3] hover:text-white '>Holiday</Link>
                                <Link className='py-2 px-5 bg-white ml-3 rounded-full hover:bg-[#e3beb3] hover:text-white '>Hotel</Link>
                                <Link className='py-2 px-5 bg-white rounded-full ml-3 hover:bg-[#e3beb3] hover:text-white '>Tips</Link>

                            </div>
                            <div className="mt-6">
                                <Link className='py-2 px-5 bg-white  rounded-full hover:bg-[#e3beb3] hover:text-white '>Resort</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;