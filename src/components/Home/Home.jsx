import React from 'react';
import Body from '../Body/Body';
import DateCheck from '../DateCheck/DateCheck';
import SpacialOffer from '../SpacialOffer/SpacialOffer';
import About from '../About/About';
import RoomsSuites from '../RoomsSuites/RoomsSuites';
import AmenitiesHome from '../Amenities/AmenitiesHome/AmenitiesHome';
import Testimonials from '../Testimonials/Testimonials';
import TestimonialsBg from '../TestimonialsBg/TestimonialsBg';
import Article from '../Article/Article';
import ContactHome from '../Contact/ContactHome';

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
            <TestimonialsBg></TestimonialsBg>
            <Article></Article>
            <ContactHome></ContactHome>
        </div>
    );
};

export default Home;