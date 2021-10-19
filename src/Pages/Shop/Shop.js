import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [shop, setShop] = useState([])

    useEffect(() => {
        fetch('/shop.json')
            .then(res => res.json())
            .then(data => setShop(data))
    }, [])

    return (
        <>
            <div className="services-area py-5">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-md-6">
                            <div className="section-title text-center">
                                <h1 className="theme-color">Our Shop </h1>
                                <p>Our latest product are going here. Shop here for best reasonable price</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {shop?.map((pd) => (
                        <div className="col-lg-3">
                            <div className="card mb-3 text-center single-service p-3">
                                <img src={pd.image} alt="" />
                                <p className="my-3 font-weight-bold">{pd.name}</p>
                                <h6 className="text-primary">Price: {pd.price}</h6>
                                
                            </div>
                        </div>
                         ))}
                    </div>
                    
                </div>
            </div>  
            <div className="subscribe py-5 bg-dark text-white">
                <div className="container">
                <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <h1 className="theme-color">Subscribe Your Email </h1>
                                <p>If you want to know our latest service and products, please subscribe our email portion.</p>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="input-group mt-4 mb-3 mx-auto">
                                <input  type="text" className="form-control bg-white" placeholder="Enter your Email" />
                                <button className="btn text-white px-4 theme-bg ">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default Shop;