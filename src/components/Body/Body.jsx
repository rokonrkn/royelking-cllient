import React from 'react';
import './Body.css'
import 'swiper/css';
import banner1 from '../../../public/images/banner-1.jpg'
import banner2 from '../../../public/images/banner-2.jpg'
import banner3 from '../../../public/images/banner-3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

const Body = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                
            >
                <SwiperSlide>
                        <div className="banner">
                        <img className='absolute  h-full w-full' src={banner3} alt="" />
                        </div>
                        <div className="text-center relative py-20">
                            <p className='text-[#c77a63] text-xl uppercase'>Summer Vacations</p>
                            <h3 className='text-8xl text-white'>Luxury Hotel For <br /> Vacation.</h3>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, rerum!</p>
                            <button style={{ border: '1px solid gray' }} className="group mt-8  relative z-10 h-12 w-36 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">BOOK ROOM</span>BOOK ROOM</button>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="banner">
                            <img className='absolute  h-full w-full' src={banner2} alt="" />
                        </div>
                        <div className="text-center relative py-20">
                            <p className='text-[#c77a63] text-xl uppercase'>Summer Vacations</p>
                            <h3 className='text-8xl text-white'>Luxury Hotel For <br /> Vacation.</h3>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, rerum!</p>
                            <button style={{ border: '1px solid gray' }} className="group mt-8  relative z-10 h-12 w-36 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">BOOK ROOM</span>BOOK ROOM</button>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="banner">
                            <img className='absolute  h-full w-full' src={banner1} alt="" />
                        </div>
                        <div className="text-center relative py-20">
                            <p className='text-[#c77a63] text-xl uppercase'>Summer Vacations</p>
                            <h3 className='text-8xl text-white'>Luxury Hotel For <br /> Vacation.</h3>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, rerum!</p>
                            <button style={{ border: '1px solid gray' }} className="group mt-8  relative z-10 h-12 w-36 overflow-hidden  text-sm text-white"> <span className="absolute  -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#c77a63]  transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-10 origin-left rotate-12 scale-x-0 transform bg-[#7a3a26]  transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute   -inset-8 origin-left rotate-12 scale-x-0 transform bg-[#542618]  transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">BOOK ROOM</span>BOOK ROOM</button>
                        </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Body;