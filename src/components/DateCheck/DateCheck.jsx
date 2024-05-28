import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Date.css'

const DateCheck = () => {
    const [value, onChange] = useState(new Date());
    const [value1, onChange1] = useState(new Date());

    const [room, setRoom] = React.useState('');

    const handleChange = (event) => {
        setRoom(event.target.value);
    };
    const [adult, setAdult] = React.useState('');

    const handleChange2 = (event) => {
        setAdult(event.target.value);
    };
    const [child, setChild] = React.useState('');

    const handleChange3 = (event) => {
        setChild(event.target.value);
    };

    return (
        <div className='bg-[#ebdbd6]'>
            <div className=" date-container xl:mx-16 py-12 ">
                <div className="fgsrgfaer">
                    <h4 className='text-md uppercase mb-2'>Check-In</h4>
                    <DatePicker className="rounded-none border-none h-12 font-xl bg-white" onChange={onChange} value={value} />
                </div>
                <div className="">
                    <h4 className='text-md uppercase mb-2'>Check-Out</h4>
                    <DatePicker className="rounded-none border-none h-12 font-xl bg-white" onChange1={onChange1} value={value1} />
                </div>
                <div className="">
                    <h4 className='text-md uppercase '>Rooms</h4>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='bg-white' size="small">
                        <InputLabel className='' id="demo-select-small-label">Room</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={room}
                            label="Room"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>1 Room</MenuItem>
                            <MenuItem value={2}>2 Room</MenuItem>
                            <MenuItem value={3}>3 Room</MenuItem>
                            <MenuItem value={4}>4 Room</MenuItem>
                            <MenuItem value={5}>5 Room</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="">
                    <h4 className='uppercase text-md'>Adults</h4>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='bg-white' size="small">
                        <InputLabel className='' id="demo-select-small-label">Adult</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={adult}
                            label="Adult"
                            onChange={handleChange2}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>1 Adult</MenuItem>
                            <MenuItem value={2}>2 Adult</MenuItem>
                            <MenuItem value={3}>3 Adult</MenuItem>
                            <MenuItem value={4}>4 Adult</MenuItem>
                            <MenuItem value={5}>5 Adult</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="">
                    <h4 className='uppercase text-md'>Child</h4>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='bg-white' size="small">
                        <InputLabel className='' id="demo-select-small-label">Child</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={child}
                            label="Child"
                            onChange={handleChange3}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>1 Child</MenuItem>
                            <MenuItem value={2}>2 Child</MenuItem>
                            <MenuItem value={3}>3 Child</MenuItem>
                            <MenuItem value={4}>4 Child</MenuItem>
                            <MenuItem value={5}>5 Child</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="flex items-center">
                    <button style={{ border: '1px solid gray' }} className="group  bg-[#7a3a26]  relative z-10 h-12 w-40 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">CHECK AVAILABILITY</span>CHECK AVAILABILITY</button>
                </div>

            </div>
        </div>
    );
};

export default DateCheck;