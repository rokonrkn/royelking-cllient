import React, { useEffect, useRef, useState } from 'react';
import logo from '../../../public/logo.png'
import { Link } from 'react-router-dom';
import './RoomDetails.css'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import image from '../../../public/images/room-17.jpg'
import Amenities from '../Amenities/Amenities';
import Footer from '../Footer/Footer';

const RoomsDetails = () => {

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

    const [value, onChange] = useState(new Date());
    const [value1, onChange1] = useState(new Date());

    const [room, setRoom] = React.useState('');

    const handleChange = (event) => {
        setRoom(event.target.value);
    };
    const [adult, setAdult] = React.useState('');

    const handleChange2 = (event) => {
        setAdult(event.target.value);
    };
    const [child, setChild] = React.useState('');

    const handleChange3 = (event) => {
        setChild(event.target.value);
    };

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
                        <h2 className='text-5xl text-white '> Room Single
                        </h2>
                    </div>
                </div>
            </div>
            <div className="bg-[#e6c1b5] flex justify-center p-5 text-white">
                <Link className=' text-xl' to={`/`}>Home || </Link>
                <h2 className=' text-xl ml-2'>Room Single</h2>
            </div>
            <div className="mx-16">
                <div className="body mt-36">
                    <div className="">
                        <div className="">
                            <h4 className='text-[#e19277] tracking-widest'>FROM $55.0</h4>
                            <h3 className='text-4xl py-4'>Luxury Room</h3>
                        </div>
                        <p className='text-gray-600 mt-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae. Curabitur at amet, enim sit commodo semper lectus phasellus. Non egestas ultrices magna gravida est sociis non ornare bibendum. tellus Dignissim ornare metus, interdum et, tellus justo. Urna libero, in scelerisque porttitor et, sagittis, et ut. Eget quam at at etiam accumsan integer facilisi justo. Lorem ut tempus cursus fames ultrices nisl, laoreet tortor, blandit. Leo diam, donec pretium, massa pellentesque et eleifend ut. Porta proin malesuada volutpat purus.
                                <br className='mt-6' />
                            At quam ac ipsum volutpat non. Duis sagittis, sollicitudin eget tristique consectetur et facilisi. Viverra sit non sed orci magna venenatis. Magna pharetra non ornare lectus sed risus maecenas adipiscing. Cras pretium vivamus nunc posuere.
                        </p>
                        <div className="mt-10">
                            <img src={image} alt="" />
                        </div>
                        <div className=" mt-10">
                            <h3 className='text-4xl'>Amenities</h3>
                            <p className='py-10 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.</p>
                        </div>
                        <div className="">
                            <Amenities></Amenities>
                        </div>
                    </div>
                    <div className="">
                        <div className='bg-[#ebdbd6] rounded-2xl mt-10 ' >
                            <div className="grid grid-cols-1 px-16 py-7">
                                <div className="">
                                    <h4 className='text-md uppercase mb-2'>Check-In</h4>
                                    <DatePicker className="rounded-none xl:w-72 border-none h-12 font-xl bg-white" onChange={onChange} value={value} />
                                </div>
                                <div className="">
                                    <h4 className='text-md mt-4 uppercase mb-2'>Check-Out</h4>
                                    <DatePicker className="rounded-none xl:w-72  border-none h-12 font-xl bg-white" onChange1={onChange1} value={value1} />
                                </div>
                                <div className="">
                                    <h4 className='text-md  mt-4 uppercase '>Rooms</h4>
                                    <FormControl sx={{ m: 1, minWidth: 220 }} className='bg-white' size="small">
                                        <InputLabel className='' id="demo-select-small-label">Room</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={room}
                                            label="Room"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={1}>1 Room</MenuItem>
                                            <MenuItem value={2}>2 Room</MenuItem>
                                            <MenuItem value={3}>3 Room</MenuItem>
                                            <MenuItem value={4}>4 Room</MenuItem>
                                            <MenuItem value={5}>5 Room</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="">
                                    <h4 className='uppercase mt-4 text-md'>Adults</h4>
                                    <FormControl sx={{ m: 1, minWidth: 220 }} className='bg-white' size="small">
                                        <InputLabel className='' id="demo-select-small-label">Adult</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={adult}
                                            label="Adult"
                                            onChange={handleChange2}
                                        >
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={1}>1 Adult</MenuItem>
                                            <MenuItem value={2}>2 Adult</MenuItem>
                                            <MenuItem value={3}>3 Adult</MenuItem>
                                            <MenuItem value={4}>4 Adult</MenuItem>
                                            <MenuItem value={5}>5 Adult</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="">
                                    <h4 className='uppercase mt-4 text-md'>Child</h4>
                                    <FormControl sx={{ m: 1, minWidth: 220 }} className='bg-white' size="small">
                                        <InputLabel className='' id="demo-select-small-label">Child</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={child}
                                            label="Child"
                                            onChange={handleChange3}
                                        >
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={1}>1 Child</MenuItem>
                                            <MenuItem value={2}>2 Child</MenuItem>
                                            <MenuItem value={3}>3 Child</MenuItem>
                                            <MenuItem value={4}>4 Child</MenuItem>
                                            <MenuItem value={5}>5 Child</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="flex items-center">
                                    <button style={{ border: '1px solid gray' }} className="group mt-10  bg-[#7a3a26]  relative z-10 h-12 w-40 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">CHECK AVAILABILITY</span>CHECK AVAILABILITY</button>
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

export default RoomsDetails;