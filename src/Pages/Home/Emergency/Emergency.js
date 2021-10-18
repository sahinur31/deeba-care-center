import React from 'react';
import emergency from '../../../images/emergency.jpg';
import './Emergency.css';

const Emergency = () => {
    return (
        <div className="emergency-area py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="emergency-left">
                            <h2>Emergency? For Any Help Contact Us Now</h2>
                            <p className="my-3">The Emergency Medical Services community continues to look towards online resources more every day for the tools they need to protect their communities and come home safe after every shift. Many EMTs and Paramedics have started their EMS web sites and informational blogs to share personal experiences with others around the world. In this section we will provide you a growing list of the available EMS blogs. Feel free to submit your own if you would like to be featured.</p>
                            <button className="btn text-white px-4 theme-bg ">Contact Us</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="emergency-right">
                            <img className="img-fluid" src={emergency} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;