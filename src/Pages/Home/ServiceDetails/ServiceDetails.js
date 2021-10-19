import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../../hooks/useFetch';
import {
    faDribbble,
    faFacebook,
    faInstagram,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceDetails.css';
// import useAppointment from '../../../hooks/useAppointment';

const ServiceDetails = () => {
    let { id } = useParams();
    const [ services ] = useFetch();
    const detail = services.find(service => service.id == id);
    /* const [appointment, setAppointment] = useAppointment();
    const {handleAppointment} =useAppointment(); */
    return (
        <>
            <div className="services-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-left border pb-3">
                                <img className="img-fluid mb-3" src={detail?.img} alt="" />
                                <div className="text-center">
                                    <h3>{detail?.name}</h3>
                                    <h6 className="theme-color my-3">{detail?.dept}</h6>
                                        <div className="detail-icon d-flex justify-content-center">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </div>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </div>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faDribbble} />
                                            </div>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </div>
                                        
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="service-right">
                                <h2 className="mb-4">Hello! I am {detail?.name} Introducing Myself</h2>
                                <p>{detail?.details}</p>
                                <button
                                className="btn mt-4 text-center text-white theme-bg">Make an Appointment</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    );
};

export default ServiceDetails;