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
                               <p>Our Best doctors service are available here. This section is for doctors service.</p>
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
                </div>
            </div>     
        </>
    );
};

export default Services;