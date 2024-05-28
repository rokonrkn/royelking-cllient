import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Suites.css'

const RoomSuitesDetails = ({ suites }) => {
    const { id, title, description, image, rating } = suites;
    return (
        <div>
            <div className='xl:mx-16 room-container'>
                {/* <div className="shadow-2xl py-3 px-10 absolute -mt-300 rounded-full">
                    <h3>Start from <span>$55.0/</span>night</h3>
                </div> */}
                <div className="shadow-2xl mt-16 box  p-10">
                    <div className="image ">
                        <img src={image} alt="" />
                    </div>
                    <div className="mt-5 ">
                        <Rating name="read-only" value={rating} readOnly />
                        <h4 className='gooogle text-3xl'>{title}</h4>
                        <p className='my-4'>{description}</p>
                        <Link to={`rooms`}><button style={{ border: '1px solid gray' }} className="group mt-7  relative z-10 h-12 w-32 overflow-hidden  text-sm text-black"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">BOOK NOW</span>BOOK NOW</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoomSuitesDetails;