import React from 'react';
import './TestimonialsBg.css'

const TestimonialsBg = () => {
    return (
        <div className="">
            <div className='bg-container relative h-[500px] mt-28'>
            </div>
            <div className="content text-center xl:-mt-80 xl:ml-44 absolute">
                <h2 className='uppercase text-[#f7a98e] tracking-widest'>testimonials</h2>
                <h3 className='text-6xl text-white '>Looking for a Relaxing Country <br />
                    Vacation Rental?</h3>
                <div className="">
                    <button style={{ border: '1px solid gray' }} className="group  bg-[#7a3a26] mt-14  relative z-10 h-12 w-40 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">CHECK AVAILABILITY</span>CHECK AVAILABILITY</button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsBg;