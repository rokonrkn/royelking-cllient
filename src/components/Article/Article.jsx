import React, { useEffect, useState } from 'react';
import ArticleDetails from './ArticleDetails';

const Article = () => {

    const [article, setArticle] = useState([])
    const [lodding, setLodding] = useState(false)

    const fetchArticleData = () => {
        fetch('http://localhost:7000/article')
            .then(res => res.json())
            .then(data => setArticle(data))
            setLodding(true)
    }

    useEffect(() => {
        fetchArticleData()
    }, [])

    return (
        <div>
            <div className="mt-20 xl:mx-16 article-conttainer">
                <div className="text-center">
                    <p className='text-[#f7a98e] tracking-widest'>OUR ARTICLE</p>
                    <h3 className='text-5xl'>Get More Update For <br />
                        Royalking</h3>
                </div>
                { lodding ? <div className="grid xl:grid-cols-3 gap-8 mt-10">
                        {
                            article.map(arti => <ArticleDetails
                                key={arti.id}
                                article={arti}
                            ></ArticleDetails>)
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

export default Article;