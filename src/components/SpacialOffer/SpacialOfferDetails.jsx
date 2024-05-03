import React from 'react';
import './Spacial.css'

const SpacialOfferDetails = ({ spacial }) => {
    const { id, title, image, description } = spacial;
    return (
        <div>
            <div className="box p-10 shadow-2xl  ">
                <div className="">
                    <div className="image">
                        <img className='' src={image} alt="" />
                    </div>
                    <div className="">
                        <h4 className='text-center gooogle mt-10 text-3xl'>{title}</h4>
                        <p className='text-center mt-3'>{description}</p>
                    </div>
                </div>

            </div>
            <div className="circle">

            </div>

        </div>
    );
};

export default SpacialOfferDetails;