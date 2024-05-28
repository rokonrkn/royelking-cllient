import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Article.css'

const ArticleDetails = ({ article }) => {

    const { id, name, title, date, admin, image } = article;

    return (
        <div>
            <div className="p-5 card-container shadow-2xl">
                <div className="">
                    <img className='image' src={image} alt="" />
                </div>
                <div className="mt-6">
                    <p className='bg-red-100 py-1 px-4 w-28 uppercase text-red-800 '>{date}</p>
                    <h4 className='text-3xl'>{name}</h4>
                    <p className='text-gray-700 mt-3'>Admin {admin}</p>
                    <p className='text-gray-700 py-4'>{title}</p>
                    <div className="">
                        <Link to={`/blog`}><BsArrowRight  className='p-2 text-5xl hover-animate  rounded-full' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;