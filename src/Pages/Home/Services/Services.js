import React from 'react';
import { Link } from 'react-router-dom';
import useAppointment from '../../../hooks/useAppointment';
import useFetch from '../../../hooks/useFetch';
import Service from '../Service/Service';

const Services = () => {
    
    const [appointment, setAppointment] = useAppointment();
    const [services] = useFetch();
    return (
        <>
          <div className="services-area py-5">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-md-6">
                            <div className="section-title text-center">
                                <h1 className="theme-color">Our Doctors Services</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco labor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                      {
                        services.map(service => (<Service
                        key={service.id}
                        service={service}
                        ></Service>
                        ))}
                    </div>
                    <div className="mt-4 mb-5 text-center">
                    {
                        appointment.length > 0 ? <Link to='/checkout'>
                        <button className="btn btn-success btn-lg">Checkout Order</button>
                        </Link> : <button disabled className="btn btn-success btn-lg">Checkout Order</button>
                    }
            </div>
                </div>
            </div>     
        </>
    );
};

export default Services;