import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-[#252638] mt-20">
                <footer className="flex flex-col text-white ">
                    <div className="grid xl:grid-cols-4 sm:grid-cols-2 xl:mx-16 sm:mx-10 p-20 ">
                        <div>
                            <h3 className='text-3xl'>Contact Us</h3>
                            <ul className=''>
                                <li className='mt-3'>Add:  <span className='text-gray-400 ml-2'>  Dhaka, Bangladesh</span> </li>
                                <li className='mt-3'>Email:<span className='text-gray-400 ml-2'>  rokoncst197@gmail.com</span></li>
                                <li className='mt-3'>Phone:<span className='text-gray-400 ml-2'>  01756647124</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-3xl'>Links</h3>
                            <ul className=''>
                                <Link><li className='mt-3 text-gray-400'>About Us</li></Link>
                                <Link><li className='mt-3 text-gray-400'>Service</li></Link>
                                <Link><li className='mt-3 text-gray-400'>Case</li></Link>
                                <Link><li className='mt-3 text-gray-400'>Contact Us</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-3xl'>Hours</h3>
                            <ul className=''>
                                <li className='mt-3 text-gray-400'>Tincidunt neque pretium lectusdonec risus. </li>
                                <li className='mt-3 text-gray-400'>Mon - Fri: 9:00AM - 6:00PM</li>
                                <li className='mt-3 text-gray-400'>Sat - Sun: 8:00AM - 4:00PM</li>
                            </ul>
                        </div>
                        <div className='ml-4'>
                            <h3 className='text-3xl'>Newsletter</h3>
                            <ul className=''>
                                <li className='mt-3 text-gray-400'>Tincidunt neque pretium lectus
                                    donec risus.</li>
                            </ul>
                        </div>
                    </div>
                    <aside className="bg-[#181826] py-5 text-center text-sm">
                        <p>&copy; Copyright 2024 by royalking Template All Right Reserved.</p>
                    </aside>
                </footer>

            </div >
        </div >
    );
};

export default Footer;