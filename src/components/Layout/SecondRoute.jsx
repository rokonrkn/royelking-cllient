import React from 'react';
import Header2 from '../Header/Header2';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const SecondRoute = () => {
    return (
        <div>
            <Header2></Header2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default SecondRoute;