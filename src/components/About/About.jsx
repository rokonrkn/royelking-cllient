import React from 'react';
import image from '../../../public/images/about.jpg'
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className='bg-[#efe2dd] mt-20'>
            <div className="xl:mx-16 about-container py-20">
                <div className="grid xl:grid-cols-2 sm:grid-cols-1">
                    <div className="image2">
                        <img src={image} alt="" />
                    </div>
                    <div className="ml-10 mt-28">
                        <h5 className='text-[#e09375] tracking-widest'>ABOUT ROYALKING</h5>
                        <h3 className='text-5xl about-font mt-3'>Luxury <br />Hotel in The Heart of <br /> San Francisco.</h3>
                        <p className='mt-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.</p>
                        <Link to={`/secondhome`}>
                            <button style={{ border: '1px solid gray' }} className="group mt-7  bg-[#7a3a26]  relative z-10 h-12 w-40 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63] transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">DISCOVER MORE</span>DISCOVER MORE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;