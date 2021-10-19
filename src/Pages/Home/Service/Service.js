import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {img,fees,title,name,id,dept,details} =service;
    return (
        <>
            <div className="col-lg-4">
                <div className="card mb-3 single-service p-3">
                    <img src={img} alt="" />
                    <div className="d-flex justify-content-between my-3">
                        <div>
                            <h3 className="my-3">{name}</h3>
                            <h5>{title}</h5>
                        </div>
                        <div>
                            <button className="btn mt-4 text-center text-white theme-bg">{dept}</button>
                        </div>
                    </div>
                    <h6>Fees: {fees}</h6>
                    <p className="text-justify">{details.slice(1,110)}</p>
                    <div className="text-center">
                        <Link to={`/service/${id}`}>
                            <button className="btn text-center text-white theme-bg">See Details</button>
                        </Link> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;