import { faBath, faBurger, faCar, faChampagneGlasses, faCircle, faHandshake, faMugSaucer, faPersonSwimming, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AmenitiesHome = () => {
    return (
        <div>
            <div className="bg-[#efe2dd] mt-28">
                <div className="py-28">
                    <div className="text-center">
                        <p className='text-[#f7a98e] tracking-widest'>DISCOVER</p>
                        <h3 className='text-5xl'>Our Best Amenities</h3>
                        <p className='text-md mt-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices <br /> suspendisse varius etiam est.
                            Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor
                            <br />sagittis amet odio est. Sit semper et velit fusce.</p>
                    </div>
                    <div className="xl:mx-16 mt-14">
                        <div className="grid xl:grid-cols-5 gap-14">
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faWifi} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Fast Wifi</div>
                            </div>
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faMugSaucer} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Coffee</div>
                            </div>
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faBath} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Bath</div>
                            </div>
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faCar} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Parking Space</div>
                            </div>
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faPersonSwimming} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Swimming Pool</div>
                            </div>
                        </div>
                        <div className="grid xl:grid-cols-5 gap-14 mt-14">
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faBurger} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Breckfast</div>
                            </div>
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faCircle} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Spa & Wellness</div>
                            </div>
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faHandshake} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Meeting Room</div>
                            </div>
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faChampagneGlasses} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Drinks</div>
                            </div>
                            <div className="bg-white hover:shadow-2xl p-10 text-center rounded-md">
                                <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faBath} /></div>
                                <div className="text-gray-500  items-center text-xl uppercase mt-5">Bath</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmenitiesHome;