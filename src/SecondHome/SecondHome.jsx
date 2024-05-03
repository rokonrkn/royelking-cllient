import React from 'react';
import { Link } from 'react-router-dom';
import './SecondH.css'

const SecondHome = () => {
    return (
        <div className=''>
            <div className="bg-[#e6c1b5] flex justify-center p-5 text-white">
                <Link className=' text-xl' to={`/`}>Home || </Link>
                <h2 className=' text-xl ml-2'>404 Page</h2>
            </div>
            <div className="xl:p-28 text-center">
                <div className="">
                    <h2 className='fontSize'>404 <br /> Oops! page can't be found</h2>
                    <small>Sorry, but the page you are looking for does not exist</small>
                </div>
                <Link to={`/`}>
                    <button style={{ border: '1px solid gray' }} className="group mt-7  bg-[#7a3a26]  relative z-10 h-12 w-40 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63] transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">GO TO HOMEPAGE</span>GO TO HOMEPAGE</button>
                </Link>
            </div>
        </div>
    );
};

export default SecondHome;