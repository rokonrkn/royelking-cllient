import React, { useEffect, useState } from 'react';
import RoomSuitesDetails from './RoomSuitesDetails';

const RoomsSuites = () => {
    const [suites, setSuites] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/suites')
            .then(res => res.json())
            .then(data => setSuites(data))
    }, [])


    return (
        <div >
            <div className="mt-20">
                <div className="text-center">
                    <p className='text-[#f7a98e] tracking-widest'>DISCOVER</p>
                    <h3 className='text-5xl'>Rooms & Suites</h3>
                </div>
                <div className="grid xl:grid-cols-3">
                    {
                        suites.map(sui => <RoomSuitesDetails
                            key={sui.id}
                            suites={sui}
                        ></RoomSuitesDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RoomsSuites;