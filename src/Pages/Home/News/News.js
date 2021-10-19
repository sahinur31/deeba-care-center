import React from 'react';
import news from '../../../images/news.jpg';
import news2 from '../../../images/news2.jpg';
import news3 from '../../../images/news3.jpg';
import './News.css';

const News = () => {
    return (
        <>
           <div className="news-area py-5">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-md-6">
                            <div className="section-title text-center">
                                <h1 className="theme-color">Our Latest News</h1>
                                <p>Our latest news are published in this area. Every latest news are instantly published this area.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-news">
                                <div className="news-img">
                                    <img src={news} alt="" />
                                    <span className="theme-bg">10 October 2021</span>
                                </div>
                                <h3 className="my-3">Health checkup</h3>
                                <p>Women’s healthcare has always been a major arena of every prominent medical organization or healthcare institute. Starting from adolescence to seniority, women’s healthcare is so much more than just pregnancy or fertility-related concerns. Addres...</p>
                                <button className="btn theme-color">Read More</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-news">
                                <div className="news-img">
                                    <img src={news3} alt="" />
                                    <span className="theme-bg">9 October 2021</span>
                                </div>
                                <h3 className="my-3">ECG/ETT </h3>
                                <p>Dialysis: The process of removing waste products and excess fluid from the body. Dialysis is necessary when the kidneys are not able to adequately filter the blood. Dialysis allows patients with kidney failure a chance to live productive lives. </p>
                                <button className="btn theme-color">Read More</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-news">
                                <div className="news-img">
                                    <img src={news2} alt="" />
                                    <span className="theme-bg">5 October 2021</span>
                                </div>
                                <h3 className="my-3">About PPE</h3>
                                <p>Personal protective equipment, commonly referred to as "PPE", is equipment worn to minimize exposure to hazards that cause serious workplace injuries and illnesses. These injuries and illnesses may result from contact with chemical, radiological, physical, electrical, mechanical, or other workplace hazards.</p>
                                <button className="btn theme-color">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default News;