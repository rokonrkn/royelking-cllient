import React from 'react';
import './Testimonials.css'
import img from '../../../public/images/testimonial-1.jpg'
import img2 from '../../../public/images/testimonial-3.jpg'
import { GiSwirlString } from "react-icons/gi";

const Testimonials = () => {
    return (
        <div className='xl:mx-16 testi-container mt-20'>
            <div className="testimonials-container ">
                <div className="">
                    <h2 className='uppercase text-[#f7a98e] tracking-widest'>testimonials</h2>
                    <h3 className='text-5xl testi-font mt-6'>What <br /> They're Say About Us</h3>
                    <p className='mt-3 text-gray-500'>Amet dui scelerisque vel habitant eget
                        tincidunt facilisis pretium. Porttitor mi
                        nisi, non vitae tempus.
                    </p>
                </div>
                <div className="grid techer-cjontaienr xl:grid-cols-2 gap-8">
                    <div className="text-center test-container relative pt-10 pb-20 px-8">
                        <div className="text-4xl flex justify-center mb-6">
                            <GiSwirlString className='bg-[#f7a98e] p-1 rounded-full' />
                        </div>
                        <p>“Mattis cras magna morb nula punar aenean aliquet in. Risus a arcu eget mi hendrerit gravida elit scelerisque tempor Pharetra fringilla tellus vivera eget sapien viverra faucibus facilisis sed facilisi dictum.”</p>
                        <h3 className='mt-6 text-2xl'>Ralpha Edward</h3>
                        <p className='text-gray-600 mt-2'>Manager</p>
                        <div className="absolute ml-[120px] mt-8">
                            <img className='rounded-full img-conainer' src={img} alt="" />
                        </div>
                    </div>
                    <div className="text-center test-container relative pt-10 pb-20 px-8">
                        <div className="text-4xl flex justify-center mb-6">
                            <GiSwirlString className='bg-[#f7a98e] p-1 rounded-full' />
                        </div>
                        <p>“Mattis cras magna morb nula punar aenean aliquet in. Risus a arcu eget mi hendrerit gravida elit scelerisque tempor Pharetra fringilla tellus vivera eget sapien viverra faucibus facilisis sed facilisi dictum.”</p>
                        <h3 className='mt-6 text-2xl'>Ralpha Edward</h3>
                        <p className='text-gray-600 mt-2'>Manager</p>
                        <div className="absolute ml-[120px] mt-8">
                            <img className='rounded-full img-conainer' src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;