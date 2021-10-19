import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">
                        <h5 className="theme-color logo"><FontAwesomeIcon icon={faStethoscope}></FontAwesomeIcon>
                         deeba <span className="text-dark">Care</span></h5>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-dark" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/shop">Shop</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/latestnews">News</Nav.Link>
                        
                        <Nav.Link as={Link} className="text-dark" to="/signup">Sign up</Nav.Link>
                        <Navbar.Text className="text-dark">
                            <a href="#login" className="text-dark">{user?.displayName}</a>
                        </Navbar.Text> 
                        {
                            (!user?.email) ?
                            <Nav.Link as={Link} className="text-dark" to="/login">
                                Login
                            </Nav.Link> 
                            :
                            <button onClick={logOut} variant="light">Logout</button>
                        }
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;