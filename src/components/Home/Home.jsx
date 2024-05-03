import React from 'react';
import Body from '../Body/Body';
import DateCheck from '../DateCheck/DateCheck';
import SpacialOffer from '../SpacialOffer/SpacialOffer';
import About from '../About/About';
import RoomsSuites from '../RoomsSuites/RoomsSuites';
import AmenitiesHome from '../Amenities/AmenitiesHome/AmenitiesHome';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Body></Body>
            <DateCheck></DateCheck>
            <SpacialOffer></SpacialOffer>
            <About></About>
            <RoomsSuites></RoomsSuites>
            <AmenitiesHome></AmenitiesHome>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;