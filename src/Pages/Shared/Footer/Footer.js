import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="footer-area text-white pt-5">
                <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="footer-logo">
                        <h5 className="theme-color f-logo"><FontAwesomeIcon icon={faStethoscope}></FontAwesomeIcon>
                         deeba <span className="text-white">Care</span></h5>
                         <p>In the year 2012, 1st March, Deeba Care Center. going to establish, with the promise to give the best and modern healthcare facilities to the people of newly developed Rampura Banasree, ...</p>
                        </div>
                        <div className="icons-container d-flex text-center ">
                            <div className="icon">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </div>
                            </div>
                    </div>
                    <div className="col-md-3">
                    <div className="footer-menu-container">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">About Online service</Nav.Link>
                            <Nav.Link eventKey="link-1">Read our blog</Nav.Link>
                            <Nav.Link eventKey="link-2">Sign up to appointment</Nav.Link>
                            <Nav.Link eventKey="link-3">Add your service</Nav.Link>
                        </Nav>
                    </div>
                    </div>
                    <div className="col-md-3">
                        <Nav defaultActiveKey="/home" className="flex-column justify-content-end">
                            <Nav.Link href="/home">Get Help</Nav.Link>
                            <Nav.Link eventKey="link-1">Read FAQs</Nav.Link>
                            <Nav.Link eventKey="link-2">View all doctors</Nav.Link>
                            <Nav.Link eventKey="link-3">Restaurants near me</Nav.Link>
                        </Nav>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col pt-2">
                    <p className="text-muted">
                        Copyright &copy;2021 deeba Care All rights reserved.
                    </p>
                    </div>
                    <div className="col">
                        <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                            <Nav.Link href="/home">Privacy & Policy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-1">Terms of Use</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-2">Pricing</Nav.Link>
                            </Nav.Item>
                        </Nav>                                          
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Footer;