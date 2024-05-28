import React from 'react';
import './Contact.css'

const ContactHome = () => {
    return (
        <div>
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
        </div>
    );
};

export default ContactHome;