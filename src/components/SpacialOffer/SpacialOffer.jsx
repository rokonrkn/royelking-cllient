import React, { useEffect, useState } from 'react';
import SpacialOfferDetails from './SpacialOfferDetails';
import './Spacial.css'

const SpacialOffer = () => {
    const [spacial, setSpacial] = useState([])

    console.log(spacial)
    useEffect(() => {
        fetch('http://localhost:7000/spacial')
            .then(res => res.json())
            .then(data => setSpacial(data))
    }, [])

    return (
        <div>
            <div className="mx-16">
                <div className="text-center mt-20">
                    <h5 className='text-[#c77a63] text-xl '>EXCLUSIVE OFFERS</h5>
                    <h3 className='text-5xl mt-2'>Featured Special <br />Offers</h3>
                </div>
                <div className="grid xl:grid-cols-3 gap-10 mt-14">
                    {
                        spacial.map(sp => <SpacialOfferDetails
                            key={sp.id}
                            spacial={sp}
                        ></SpacialOfferDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SpacialOffer;