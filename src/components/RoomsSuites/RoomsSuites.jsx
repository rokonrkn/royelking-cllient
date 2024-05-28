import React, { useEffect, useState } from 'react';
import RoomSuitesDetails from './RoomSuitesDetails';

const RoomsSuites = () => {
    const [suites, setSuites] = useState([])
    const [lodding, setLodding] = useState(false)


    const fetchRoomsSuites = async () => {

        await fetch('http://localhost:7000/suites')
            .then(res => res.json())
            .then(data => setSuites(data))
        setLodding(true)
    }

    useEffect(() => {
        fetchRoomsSuites()
    }, [])


    return (
        <div >
            <div className="mt-20">
                <div className="text-center">
                    <p className='text-[#f7a98e] tracking-widest'>DISCOVER</p>
                    <h3 className='text-5xl'>Rooms & Suites</h3>
                </div>
                {lodding ? <div className="grid xl:grid-cols-3">
                    {
                        suites.map(sui => <RoomSuitesDetails
                            key={sui.id}
                            suites={sui}
                        ></RoomSuitesDetails>)
                    }
                </div>
                    :
                    <div className=" flex justify-center mt-28 mb-28">
                        <div
                            className=" h-16 w-16  animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-5.125em] text-yellow-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"> </span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default RoomsSuites;