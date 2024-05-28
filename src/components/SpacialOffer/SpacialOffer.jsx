import React, { useEffect, useState } from 'react';
import SpacialOfferDetails from './SpacialOfferDetails';
import './Spacial.css'

const SpacialOffer = () => {

    const [spacial, setSpacial] = useState([])
    const [lodding, setLodding] = useState(false)
    console.log(spacial)

    const fetchSpaicalData = async () => {
        try {
            await fetch('http://localhost:7000/spacial')
                .then(res => res.json())
                .then(data => setSpacial(data))
            setLodding(true)
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        fetchSpaicalData()
    }, [])

    return (
        <div>
            <div className="xl:mx-16 offfer-container">
                <div className="text-center spaical-container mt-20">
                    <h5 className='text-[#c77a63] text-xl '>EXCLUSIVE OFFERS</h5>
                    <h3 className='text-5xl mt-2'>Featured Special <br />Offers</h3>
                </div>
                {lodding ? <div className="grid xl:grid-cols-3 gap-10 mt-14">
                    {
                        spacial.map(sp => <SpacialOfferDetails
                            key={sp.id}
                            spacial={sp}
                        ></SpacialOfferDetails>)
                    }
                </div> : <div className=" flex justify-center mt-28 mb-28">
                    <div
                        className=" h-16 w-16  animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-5.125em] text-yellow-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        > </span
                        >
                    </div>
                </div>


                }
            </div>
        </div>
    );
};

export default SpacialOffer;