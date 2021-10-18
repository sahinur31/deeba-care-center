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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco labor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-news">
                                <div className="news-img">
                                    <img src={news} alt="" />
                                    <span className="theme-bg">20April 2021</span>
                                </div>
                                <h3 className="my-3">Comparing Nitrogen And Mechanical Vapor Sample Freezers</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button className="btn theme-color">Read More</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-news">
                                <div className="news-img">
                                    <img src={news2} alt="" />
                                    <span className="theme-bg">20April 2021</span>
                                </div>
                                <h3 className="my-3">ComparingIt Is Very Important To Wear Proper PPE To Keep Yourself Free </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button className="btn theme-color">Read More</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-news">
                                <div className="news-img">
                                    <img src={news3} alt="" />
                                    <span className="theme-bg">20April 2021</span>
                                </div>
                                <h3 className="my-3">Hollowed-Out Public Health System Faces More Cuts Amid Virus</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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