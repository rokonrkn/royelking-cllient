
import React from 'react';
import { faBath, faBurger, faCar, faChampagneGlasses, faCheck, faCircle, faHandshake, faMugSaucer, faPersonSwimming, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';

const Amenities = () => {
    return (
        <div>
            <div className="grid xl:grid-cols-3">
                <div className="flex">
                    <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faWifi} /></div>
                    <div className="text-gray-500 flex items-center ml-10">Fast Wifi</div>
                </div>
                <div className="flex">
                    <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faMugSaucer} /></div>
                    <div className="text-gray-500 flex items-center ml-10">Coffee</div>
                </div>
                <div className="flex">
                    <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faBath} /></div>
                    <div className="text-gray-500 flex items-center ml-10">Bath</div>
                </div>
            </div>
            <div className="grid xl:grid-cols-3 mt-8">
                <div className="flex">
                    <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faCar} /></div>
                    <div className="text-gray-500 flex items-center ml-10">Parking Space</div>
                </div>
                <div className="flex">
                    <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faPersonSwimming} /></div>
                    <div className="text-gray-500 flex items-center ml-10">Swimming Pool</div>
                </div>
                <div className="flex">
                    <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faBurger} /></div>
                    <div className="text-gray-500 flex items-center ml-10">Breckfast</div>
                </div>
            </div>
            <div className="grid xl:grid-cols-3 mt-8">
                <div className="flex">
                    <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faCircle} /></div>
                    <div className="text-gray-500 flex items-center ml-10">Spa & Wellness</div>
                </div>
                <div className="flex">
                    <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faHandshake} /></div>
                    <div className="text-gray-500 flex items-center ml-10">Meeting Room</div>
                </div>
                <div className="flex">
                    <div className="text-5xl text-[#de9883]"><FontAwesomeIcon icon={faChampagneGlasses} /></div>
                    <div className="text-gray-500 flex items-center ml-10">Drinks</div>
                </div>
            </div>
            <div className="mt-16">
                <h3 className='text-4xl'>Hotel Rules</h3>
                <p className='text-gray-500 py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.</p>
                
            </div>
            <div className="">
                <h4><FontAwesomeIcon className='text-2xl text-[#de9883]' icon={faCheck} /> <span className='ml-4'>Check-in: 3:00 PM -9:00 PM</span></h4>
                <h4><FontAwesomeIcon className='text-2xl mt-2 text-[#de9883]' icon={faCheck} /> <span className='ml-4'>Check-out: 10:00 AM</span></h4>
                <h4><FontAwesomeIcon className='text-2xl mt-2 text-[#de9883]' icon={faCheck} /> <span className='ml-4'>No Pets</span></h4>
                <h4><FontAwesomeIcon className='text-2xl mt-2 text-[#de9883]' icon={faCheck} /> <span className='ml-4'>No Smoking</span></h4>
            </div>
        </div>
    );
};

export default Amenities;